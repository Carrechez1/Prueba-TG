import React from "react";
import { PropsSerchers } from "../../../types/PropSerchers";
import SearchBusinessName from "../../dropdown/search/serchers/SearchBusinessName";
import SearchName from "../../dropdown/search/serchers/SearchName";
import SearchNit from "../../dropdown/search/serchers/SearchNit";
import SearchTelf from "../../dropdown/search/serchers/SearchTelf";

const HomeUsing1Browser = ({
  searchName,
  searchNit,
  searchBusinessName,
  searchTelf,
  users,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let searcherName = users?.filter((dato) => {
    if (dato.name !== undefined) {
      if (searchName !== undefined) {
        return dato.name.toLowerCase().includes(searchName.toLocaleLowerCase());
      }
    }
  });

  let searcherNit = users?.filter((dato) => {
    if (dato.nit !== undefined) {
      if (searchNit !== undefined) {
        return dato.nit.toLowerCase().includes(searchNit.toLocaleLowerCase());
      }
    }
  });

  let searcherBusinessName = users?.filter((dato) => {
    if (dato.businessName !== undefined) {
      if (searchBusinessName !== undefined) {
        return dato.businessName
          .toLowerCase()
          .includes(searchBusinessName.toLocaleLowerCase());
      }
    }
  });

  let searcherTelf = users?.filter((dato) => {
    if (dato.telf !== undefined) {
      if (searchTelf !== undefined) {
        return dato.telf.toLowerCase().includes(searchTelf.toLocaleLowerCase());
      }
    }
  });

  if (searchName && !searchNit && !searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchName
            searcherName={searcherName}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (searchNit && !searchName && !searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchNit
            searcherNit={searcherNit}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!searchNit && !searchName && searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchBusinessName
            searcherBusinessName={searcherBusinessName}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!searchNit && !searchName && !searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchTelf
            searcherTelf={searcherTelf}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default HomeUsing1Browser;
