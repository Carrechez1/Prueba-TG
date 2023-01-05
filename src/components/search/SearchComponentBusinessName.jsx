import React from "react";

const SearchComponentBusinessName = ({
  searchBusinessName,
  setSearchBusinessName,
  setPage,
}) => {
  const searcherBusinessName = (e) => {
    setSearchBusinessName(e.target.value);
    setPage(1);
  };
  return (
    <div>
      <input
        value={searchBusinessName}
        onChange={searcherBusinessName}
        type="text"
        placeholder="Razon social"
      />
    </div>
  );
};

export default SearchComponentBusinessName;
