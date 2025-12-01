"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
page: number;
totalPages: number;
onPageChange: (page: number) => void;
itemsPerPage: number;
totalItems: number;
}

const Pagination: React.FC<PaginationProps> = ({
page,
totalPages,
onPageChange,
itemsPerPage,
totalItems,
}) => {
const maxButtons = 5;

// Tentukan range tombol tengah
let start = Math.max(1, page - Math.floor(maxButtons / 2));
let end = start + maxButtons - 1;

if (end > totalPages) {
end = totalPages;
start = Math.max(1, end - maxButtons + 1);
}

const pages = [];
for (let p = start; p <= end; p++) pages.push(p);

const startItem = (page - 1) * itemsPerPage + 1;
const endItem = Math.min(page * itemsPerPage, totalItems);

return ( 
  <div className="w-full flex justify-between items-center mt-6">
    {/* LEFT: Menampilkan item range */}
    <div className="text-sm text-gray-600">
      Menampilkan {startItem} sampai {endItem} dari {totalItems} entri
    </div>

    {/* CENTER: tombol halaman */}
    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border">
      {start > 1 && (
        <>
          <button
            className={`w-9 h-9 flex items-center justify-center rounded-lg border 
              ${page === 1 ? "bg-gray-200 font-semibold" : "bg-white"}`}
            onClick={() => onPageChange(1)}
          >
            1
          </button>
          {start > 2 && <span className="px-2">…</span>}
        </>
      )}

    {pages.map((p) => (
      <button
        key={p}
        className={`w-9 h-9 flex items-center justify-center rounded-lg border 
          ${p === page ? "bg-gray-200 font-semibold" : "bg-white"}`}
        onClick={() => onPageChange(p)}
      >
        {p}
      </button>
    ))}

    {end < totalPages && (
      <>
        {end < totalPages - 1 && <span className="px-2">…</span>}
        <button
          className={`w-9 h-9 flex items-center justify-center rounded-lg border 
            ${page === totalPages ? "bg-gray-200 font-semibold" : "bg-white"}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      </>
    )}
  </div>

  {/* RIGHT: Previous / Next */}
  <div className="flex items-center gap-2">
    <button
      className="border rounded-xl px-4 py-2 bg-white shadow-sm flex items-center gap-1"
      disabled={page === 1}
      onClick={() => onPageChange(page - 1)}
    >
      <ChevronLeft size={18} /> Previous
    </button>

    <button
      className="border rounded-xl px-4 py-2 bg-white shadow-sm flex items-center gap-1"
      disabled={page === totalPages}
      onClick={() => onPageChange(page + 1)}
    >
      Next <ChevronRight size={18} />
    </button>
  </div>
</div>
);
};

export default Pagination;
