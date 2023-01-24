import React from "react";
import { searchNameNitTelfBusinessName } from "../../../types/searchNameNitTelfBusinessName";

const SearchComponentNit = ({
  searchNit,
  setSearchNit,
  setPage,
}: searchNameNitTelfBusinessName) => {
  const searcherNit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearchNit !== undefined) {
      setSearchNit(e.target.value);
    }

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
