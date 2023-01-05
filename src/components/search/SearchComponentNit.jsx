import React from "react";

const SearchComponentNit = ({ searchNit, setSearchNit, setPage }) => {
  const searcherNit = (e) => {
    setSearchNit(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <input
        value={searchNit}
        onChange={searcherNit}
        type="text"
        placeholder="Nit"
      />
    </div>
  );
};

export default SearchComponentNit;
