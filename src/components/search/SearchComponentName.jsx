import React from "react";

const SearchComponentName = ({ searchName, setSearchName, setPage }) => {
  const searcherName = (e) => {
    setSearchName(e.target.value);
    setPage(1);
  };

  return (
    <div>
      <input
        value={searchName}
        onChange={searcherName}
        type="text"
        placeholder="Nombre"
      />
    </div>
  );
};

export default SearchComponentName;
