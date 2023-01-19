import React from "react";
import SearchNit from "./serchers/SearchNit";
import SearchNitName from "./serchers/SearchNitName";
import SearchBusinessName from "./serchers/SearchBusinessName";
import SearchTelf from "./serchers/SearchTelf";
import SearchTelfNit from "./serchers/SearchTelfNit";
import SearchTelfName from "./serchers/SearchTelfName";
import SearchNameNitTelf from "./serchers/SearchNameNitTelf";
import SerchersAll from "./serchers/SerchersAll";
import Show from "./CRUD/Show";
import SearchName from "./serchers/SearchName";
import SearchTelfBusinessName from "./serchers/SearchTelfBusinessName";
import SearchNitBusinessName from "./serchers/SearchNitBusinessName";
import SearchNameBusinessName from "./serchers/SearchNameBusinessName";
import SearchNameNitBusinessName from "./serchers/SearchNameNitBusinessName";
import SearchNitBusinessNameTelf from "./serchers/SearchNitBusinessNameTelf";
import SearchNameBusinessNameTelf from "./serchers/SearchNameBusinessNameTelf";
import { Props } from "../types/PropsHome";

const Home = ({
  users,
  searchName,
  searchNit,
  searchBusinessName,
  searchTelf,
  page,
  setPage,
  perPage,
}: Props) => {
  const initialP = (page - 1) * perPage;
  const finalP = page * perPage;

  let searcherName = users.filter((dato) => {
    if (dato.name !== undefined) {
      return dato.name.toLowerCase().includes(searchName.toLocaleLowerCase());
    }
  });

  let searcherNit = users.filter((dato) => {
    if (dato.nit !== undefined) {
      return dato.nit.toLowerCase().includes(searchNit.toLocaleLowerCase());
    }
  });
  let searcherBusinessName = users.filter((dato) => {
    if (dato.businessName !== undefined) {
      return dato.businessName
        .toLowerCase()
        .includes(searchBusinessName.toLocaleLowerCase());
    }
  });
  let searcherTelf = users.filter((dato) => {
    if (dato.telf !== undefined) {
      return dato.telf.toLowerCase().includes(searchTelf.toLocaleLowerCase());
    }
  });

  let newSearcherName: typeof searcherName = [];
  let newSearcherNit: typeof searcherNit = [];
  let newSearcherBusinessName: typeof searcherBusinessName = [];
  if (searchName || searchNit || searchBusinessName) {
    newSearcherName = users.filter((dato) => {
      if (dato.name !== undefined) {
        return dato.name.toLowerCase().includes(searchName.toLocaleLowerCase());
      }
    });
    newSearcherNit = users.filter((dato) => {
      if (dato.nit !== undefined) {
        return dato.nit.toLowerCase().includes(searchNit.toLocaleLowerCase());
      }
    });
    newSearcherBusinessName = users.filter((dato) => {
      if (dato.businessName !== undefined) {
        return dato.businessName
          .toLowerCase()
          .includes(searchBusinessName.toLocaleLowerCase());
      }
    });
  }
  if (!searchName && !searchNit && !searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <body>
          <Show
            users={users}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </body>
      </div>
    );
  } else if (searchName && !searchNit && !searchBusinessName && !searchTelf) {
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
  } else if (searchName && searchNit && !searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchNitName
            newSearcherName={newSearcherName}
            searchNit={searchNit}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!searchName && !searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchTelfBusinessName
            newSearcherBusinessName={newSearcherBusinessName}
            searchTelf={searchTelf}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!searchName && searchNit && searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchNitBusinessName
            newSearcherNit={newSearcherNit}
            searchBusinessName={searchBusinessName}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!searchName && searchNit && !searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchTelfNit
            newSearcherNit={newSearcherNit}
            searchTelf={searchTelf}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (searchName && !searchNit && !searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchTelfName
            newSearcherName={newSearcherName}
            searchTelf={searchTelf}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (searchName && !searchNit && searchBusinessName && !searchTelf) {
    return (
      <div className="App">
        <div>
          <SearchNameBusinessName
            newSearcherName={newSearcherName}
            searchBusinessName={searchBusinessName}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (searchName && searchNit && searchBusinessName && !searchTelf) {
    return (
      <div className="App">
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
      </div>
    );
  } else if (!searchName && searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
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
      </div>
    );
  } else if (searchName && searchNit && !searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
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
      </div>
    );
  } else if (searchName && !searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
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
      </div>
    );
  } else if (searchName && searchNit && searchBusinessName && searchTelf) {
    return (
      <div className="App">
        <div>
          <SerchersAll
            newSearcherName={newSearcherName}
            searchNit={searchNit}
            searchBusinessName={searchBusinessName}
            searchTelf={searchTelf}
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

export default Home;
