"use client";

import React, { useEffect, useMemo, useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import Pagination from "@/components/Pagination/Pagination";

import {
  produkProdi,
  isbnData,
  pkmData,
  hkiData,
  sitasiDosen,
} from "@/app/api/data";

// Tipe Tab dan Column
type TabId = "sitasi" | "hki" | "penelitian" | "pkm" | "publikasi";

interface Column {
  key: string;
  label: string;
}

// Data Tab
const tabs = [
  { id: "sitasi" as TabId, label: "Sitasi Dosen", data: sitasiDosen },
  { id: "hki" as TabId, label: "HKI Dosen", data: hkiData },
  { id: "penelitian" as TabId, label: "Produk Prodi", data: produkProdi },
  { id: "pkm" as TabId, label: "PKM", data: pkmData },
  { id: "publikasi" as TabId, label: "Buku ISBN", data: isbnData },
];

const breadcrumbLinks = [
  { href: "/", text: "Home" },
  { href: "/riset", text: "Riset & Publikasi" },
];

// Kolom per tab
const getColumnsForTab = (tabId: TabId): Column[] => {
  switch (tabId) {
    case "sitasi":
      return [
        { key: "name", label: "Nama" },
        { key: "judul", label: "Judul Artikel" },
        { key: "jumlahSitasi", label: "Jumlah Sitasi" },
      ];
    case "hki":
      return [
        { key: "judul", label: "Judul" },
        { key: "tahun", label: "Tahun" },
        { key: "nomorHki", label: "Nomor Pencatatan HKI" },
      ];
    case "penelitian":
      return [
        { key: "judul", label: "Judul" },
        { key: "tahun", label: "Tahun" },
        { key: "keterangan", label: "Keterangan" },
      ];
    case "pkm":
      return [
        { key: "judul", label: "Judul" },
        { key: "dosen", label: "Dosen" },
        { key: "mataKuliah", label: "Mata Kuliah" },
        { key: "bahanIntegrasi", label: "Bahan Integrasi" },
        { key: "tahun", label: "Tahun" },
      ];
    case "publikasi":
      return [
        { key: "judul", label: "Judul" },
        { key: "tahun", label: "Tahun" },
        { key: "keterangan", label: "ISBN" },
      ];
    default:
      return [];
  }
};

const Publikasi = () => {
  const [activeTab, setActiveTab] = useState<TabId>("sitasi");
  const [search, setSearch] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);

  const activeTabData = tabs.find((t) => t.id === activeTab);
  const activeData = activeTabData?.data ?? [];
  const columns = useMemo(() => getColumnsForTab(activeTab), [activeTab]);

  const filtered = useMemo(() => {
    if (!search) return activeData;
    const q = search.toLowerCase();
    return activeData.filter((row) =>
      Object.values(row).some((v) => String(v).toLowerCase().includes(q))
    );
  }, [activeData, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const totalItems = filtered.length;

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  useEffect(() => {
    setSearch("");
    setPage(1);
  }, [activeTab]);

  const paginated = filtered.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <section id="Riset" className="py-12 bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-700 space-y-6 pb-16">
          <Breadcrumb links={breadcrumbLinks} />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Riset <br />
            <span className="text-primary">Departemen Sosiologi</span>
          </h2>
        </div>

        {/* TAB */}
        <div className="flex justify-center mb-6">
          <div className="flex gap-3 bg-white p-2 rounded-lg shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md font-medium ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
          {/* SEARCH */}
          <input
            type="text"
            placeholder="Cari data..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full  px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
          />

          {/* ROWS PER PAGE */}
          <div className="relative">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
            className="appearance-none w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
          >
            {[10, 20, 50, 100].map((n) => (
              <option key={n} value={n}>
                {n} / halaman
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        </div>


        {/* TABLE */}
        <div className="overflow-x-auto rounded-lg border">
          <table className="w-full table-auto border-collapse bg-white">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 border text-left">No.</th>
                {columns.map((col) => (
                  <th key={col.key} className="px-4 py-3 border text-left">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {paginated.map((row: any, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border">
                    {(page - 1) * rowsPerPage + i + 1}
                  </td>
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 border">
                      {String(row[col.key] ?? "")}
                    </td>
                  ))}
                </tr>
              ))}

              {paginated.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length + 1}
                    className="py-6 text-center text-gray-500"
                  >
                    Tidak ada data pada tab ini.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        {filtered.length > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
            totalItems={totalItems}
            itemsPerPage={rowsPerPage}
          />
        )}
      </div>
    </section>
  );
};

export default Publikasi;
