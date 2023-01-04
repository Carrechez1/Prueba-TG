import React from "react";
import SearchNit from "./serchers/SearchNit";
import SearchNitName from "./serchers/SearchNitName";
import SearchNameNitSr from "./serchers/SearchNameNitBusinessName";
import SearchBusinessName from "./serchers/SearchBusinessName";
import SearchTelf from "./serchers/SearchTelf";
import SearchTelfNit from "./serchers/SearchTelfNit";
import SearchTelfName from "./serchers/SearchTelfName";
import SearchNitRsTelf from "./serchers/SearchNameBusinessNameTelf";
import SearchNameNitTelf from "./serchers/SearchNameNitTelf";
import SearchNameSrTelf from "./serchers/SearchNitBusinessNameTelf";
import SerchersAll from "./serchers/SerchersAll";
import Show from "./CRUD/Show";
import SearchName from "./serchers/SearchName";
import SearchTelfBusinessName from "./serchers/SearchTelfBusinessName";
import SearchNitBusinessName from "./serchers/SearchNitBusinessName";
import SearchNameBusinessName from "./serchers/SearchNameBusinessName";
import SearchNameNitBusinessName from "./serchers/SearchNameNitBusinessName";
import SearchNitBusinessNameTelf from "./serchers/SearchNitBusinessNameTelf";
import SearchNameBusinessNameTelf from "./serchers/SearchNameBusinessNameTelf";

const Home = ({
  users,
  search,
  search2,
  search3,
  search4,
  getUsers,
  page,
  setPage,
  perPage,
}) => {
  const initialP = (page - 1) * perPage;
  const finalP = page * perPage;

  let searcherName = users.filter((dato) =>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  let searcherNit = users.filter((dato) =>
    dato.nit.toLowerCase().includes(search2.toLocaleLowerCase())
  );
  let searcherBusinessName = users.filter((dato) =>
    dato.businessName.toLowerCase().includes(search3.toLocaleLowerCase())
  );
  let searcherTelf = users.filter((dato) =>
    dato.telf.toLowerCase().includes(search4.toLocaleLowerCase())
  );

  let newSearcherName = [];
  let newSearcherNit = [];
  let newSearcherBusinessName = [];
  if (search || search2 || search3) {
    newSearcherName = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    newSearcherNit = users.filter((dato) =>
      dato.nit.toLowerCase().includes(search2.toLocaleLowerCase())
    );
    newSearcherBusinessName = users.filter((dato) =>
      dato.businessName.toLowerCase().includes(search3.toLocaleLowerCase())
    );
  }
  if (!search && !search2 && !search3 && !search4) {
    return (
      <div className="App">
        <body>
          <Show
            getUsers={getUsers}
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
  } else if (search && !search2 && !search3 && !search4) {
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
  } else if (search2 && !search && !search3 && !search4) {
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
  } else if (!search2 && !search && search3 && !search4) {
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
  } else if (!search2 && !search && !search3 && search4) {
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
  } else if (search && search2 && !search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNitName
            newSearcherName={newSearcherName}
            search2={search2}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfBusinessName
            newSearcherBusinessName={newSearcherBusinessName}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNitBusinessName
            newSearcherNit={newSearcherNit}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfNit
            newSearcherNit={newSearcherNit}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && !search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfName
            newSearcherName={newSearcherName}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && !search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNameBusinessName
            newSearcherName={newSearcherName}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNameNitBusinessName
            newSearcherName={newSearcherName}
            search2={search2}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (!search && search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNitBusinessNameTelf
            newSearcherNit={newSearcherNit}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNameNitTelf
            newSearcherName={newSearcherName}
            search2={search2}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNameBusinessNameTelf
            newSearcherName={newSearcherName}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  } else if (search && search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SerchersAll
            newSearcherName={newSearcherName}
            search2={search2}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
  }
};

export default Home;
