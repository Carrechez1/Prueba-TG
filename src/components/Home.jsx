import React from "react";
import ShowSearch from "./serchers/ShowSearch";
import SearchNit from "./serchers/SearchNit";
import SearchNitName from "./serchers/SearchNitName";
import SearchNitSr from "./serchers/SearchNitSr";
import SearchNameSr from "./serchers/SearchNameSr";
import SearchNameNitSr from "./serchers/SearchNameNitSr";
import SearchSr from "./serchers/Searchsr";
import SearchTelf from "./serchers/SearchTelf";
import SearchTelfSr from "./serchers/SearchTelfSr";
import SearchTelfNit from "./serchers/SearchTelfNit";
import SearchTelfName from "./serchers/SearchTelfName";
import SearchNitRsTelf from "./serchers/SearchNitRsTelf";
import SearchNameNitTelf from "./serchers/SearchNameNitTelf";
import SearchNameSrTelf from "./serchers/SearchNameSrTelf";
import SerchersAll from "./serchers/SerchersAll";
import Show from "./CRUD/Show";

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
  /******************Logica de paginacion**************************** */
  const initialP = (page - 1) * perPage;
  const finalP = page * perPage;
  /*********************Buscadores por tipo de dato**************************/
  let results = users.filter((dato) =>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  let results2 = users.filter((dato2) =>
    dato2.nit.toLowerCase().includes(search2.toLocaleLowerCase())
  );
  let results3 = users.filter((dato3) =>
    dato3.businessName.toLowerCase().includes(search3.toLocaleLowerCase())
  );
  let results4 = users.filter((dato4) =>
    dato4.telf.toLowerCase().includes(search4.toLocaleLowerCase())
  );
  /******************crear nuevo arreglo para la busqueda combinada*********************** */
  let resultss = [];
  let resultss2 = [];
  let resultss3 = [];
  if (search || search2 || search3) {
    resultss = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
    resultss2 = users.filter((dato2) =>
      dato2.nit.toLowerCase().includes(search2.toLocaleLowerCase())
    );
    resultss3 = users.filter((dato3) =>
      dato3.businessName.toLowerCase().includes(search3.toLocaleLowerCase())
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por nombre************************* */
  } else if (search && !search2 && !search3 && !search4) {
    return (
      <div className="App">
        <div>
          <ShowSearch
            results={results}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por nit************************* */
  } else if (search2 && !search && !search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNit
            results2={results2}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por Razon social************************* */
  } else if (!search2 && !search && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchSr
            results3={results3}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por telefono************************* */
  } else if (!search2 && !search && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelf
            results4={results4}
            initialP={initialP}
            finalP={finalP}
            page={page}
            setPage={setPage}
            perPage={perPage}
          />
        </div>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores: nombre y nit************************* */
  } else if (search && search2 && !search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNitName
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:razon y telefono*********************** */
  } else if (!search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfSr
            resultss3={resultss3}
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nit y razon************************* */
  } else if (!search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNitSr
            resultss2={resultss2}
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nit y telf************************* */
  } else if (!search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfNit
            resultss2={resultss2}
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nombre y telf************************* */
  } else if (search && !search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchTelfName
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nombre y razon************************* */
  } else if (search && !search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNameSr
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, nit y razon******************** */
  } else if (search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <div>
          <SearchNameNitSr
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nit, razon y telf******************** */
  } else if (!search && search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNitRsTelf
            resultss2={resultss2}
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
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, nit y telf******************** */
  } else if (search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNameNitTelf
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, razon y telf******************** */
  } else if (search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SearchNameSrTelf
            resultss={resultss}
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
    /********************************************* */
    /********************************************* */
    /*************Si se usan los 4 buscadores******************** */
  } else if (search && search2 && search3 && search4) {
    return (
      <div className="App">
        <div>
          <SerchersAll
            resultss={resultss}
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
