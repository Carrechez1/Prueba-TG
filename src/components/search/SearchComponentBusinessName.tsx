import React from "react";
import { searchNameNitTelfBusinessName } from "../../types/searchNameNitTelfBusinessName";

const SearchComponentBusinessName = ({
  searchBusinessName,
  setSearchBusinessName,
  setPage,
}: searchNameNitTelfBusinessName) => {
  const searcherBusinessName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchBusinessName !== undefined) {
      setSearchBusinessName(e.target.value);
    }
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
