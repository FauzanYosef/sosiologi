const getImagePrefix = () => {
    return process.env.NODE_ENV === "production"
        ? "/MagisterFisip/"
        : "";
};

export { getImagePrefix };