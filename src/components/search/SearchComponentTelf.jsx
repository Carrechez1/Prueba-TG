import React from "react";

const SearchComponentTelf = ({ searchTelf, setSearchTelf, setPage }) => {
  const searcherTelf = (e) => {
    setSearchTelf(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <input
        value={searchTelf}
        onChange={searcherTelf}
        type="text"
        placeholder="Telefono"
      />
    </div>
  );
};

export default SearchComponentTelf;
