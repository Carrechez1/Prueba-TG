import React from "react";
import { PropsSerchers } from "../../../types/PropSerchers";
import SearchNameBusinessNameTelf from "../../dropdown/search/serchers/SearchNameBusinessNameTelf";
import SearchNameNitBusinessName from "../../dropdown/search/serchers/SearchNameNitBusinessName";
import SearchNameNitTelf from "../../dropdown/search/serchers/SearchNameNitTelf";
import SearchNitBusinessNameTelf from "../../dropdown/search/serchers/SearchNitBusinessNameTelf";

const HomeUsing3Browser = ({
  searchNit,
  searchBusinessName,
  searchTelf,
  searchName,
  initialP,
  finalP,
  page,
  perPage,
  setPage,
  users,
}: PropsSerchers) => {
  let newSearcherName: typeof users = [];
  let newSearcherNit: typeof users = [];

  if (searchName || searchNit) {
    newSearcherName = users?.filter((dato) => {
      if (dato.name !== undefined) {
        if (searchName !== undefined) {
          return dato.name
            .toLowerCase()
            .includes(searchName.toLocaleLowerCase());
        }
      }
    });
    newSearcherNit = users?.filter((dato) => {
      if (dato.nit !== undefined) {
        if (searchNit !== undefined) {
          return dato.nit.toLowerCase().includes(searchNit.toLocaleLowerCase());
        }
      }
    });
  }

  if (searchName && searchNit && searchBusinessName && !searchTelf) {
    return (
      <div>
        <SearchNameNitBusinessName
          newSearcherName={newSearcherName}
          searchNit={searchNit}
          searchBusinessName={searchBusinessName}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (!searchName && searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <SearchNitBusinessNameTelf
          newSearcherNit={newSearcherNit}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (searchName && searchNit && !searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <SearchNameNitTelf
          newSearcherName={newSearcherName}
          searchNit={searchNit}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else if (searchName && !searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <SearchNameBusinessNameTelf
          newSearcherName={newSearcherName}
          searchBusinessName={searchBusinessName}
          searchTelf={searchTelf}
          initialP={initialP}
          finalP={finalP}
          page={page}
          setPage={setPage}
          perPage={perPage}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default HomeUsing3Browser;
