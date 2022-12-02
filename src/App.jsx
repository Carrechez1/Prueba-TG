import { useEffect, useState } from "react";
import "./css/App.css";
import DropDown from "./components/DropDown";
import Show from "./components/CRUD/Show";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import ShowSearch from "./components/serchers/ShowSearch";
import SearchNit from "./components/serchers/SearchNit";
import Pagination from "./components/Pagination";
import SearchNitName from "./components/serchers/SearchNitName";
import SearchNitSr from "./components/serchers/SearchNitSr";
import SearchNameSr from "./components/serchers/SearchNameSr";
import SearchNameNitSr from "./components/serchers/SearchNameNitSr";
import SearchSr from "./components/serchers/Searchsr";
import SearchTelf from "./components/serchers/SearchTelf";
import SearchTelfSr from "./components/serchers/SearchTelfSr";
import SearchTelfNit from "./components/serchers/SearchTelfNit";
import SearchTelfName from "./components/serchers/SearchTelfName";
import SearchNitRsTelf from "./components/serchers/SearchNitRsTelf";
import SearchNameNitTelf from "./components/serchers/SearchNameNitTelf";
import SearchNameSrTelf from "./components/serchers/SearchNameSrTelf";
// import SearchTelf from "./components/serchers/SearchTelf";

/*Desarrollar usando reactjs un componente de tipo dropdown (o combobox)

- Al desplegarlo consultará a un servicio de firebase buscando coincidencias según el texto escrito (o sin filtro, en caso de que no se haya escrito texto).
- El modelo en firebase consistirá de los siguientes atributos:
1. nombre
2. razón social
3. nit
4. teléfono
5. código
- Debe solicitar resultados paginados de 20 en 20, y solo deberá traer la siguiente página cuando se esté scrolleando cerca al final de la lista actual de resultados.
- Debe permitir parametrizar por qué atributo del objeto se buscará. La parametrización se debe hacer por código, no en tiempo de ejecución
- El primer resultado del dropdown debe ser una opción fija que al darle click levante un pequeño pop-up, parte del componente, que permita agregar un nuevo objeto con el texto ya ingresado, pero permitiendo editarlo antes de guardar también.
- El proyecto debe correrse en un contenedor de docker
- Adjuntar también dentro del repositorio, capturas de pantalla de la solución funcionando*/

function App() {
  /********************Declaramos estados************************** */
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  /******************Logica de paginacion**************************** */
  const initialP = (page - 1) * perPage;
  const finalP = page * perPage;
  /*******************coleccion de datos que se trae de firebase*************************** */
  const usersCollection = collection(db, "users");
  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
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
  /*********************mostrar datos que llegan************************ */
  useEffect(() => {
    getUsers();
  }, []);
  /********************************************* */
  /********************************************* */
  /*******************Si no se usa ningun buscador mostrara************************* */
  if (!search && !search2 && !search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            setSearch2={setSearch2}
            search2={search2}
            search={search}
            setSearch={setSearch}
            search3={search3}
            setSearch3={setSearch3}
            search4={search4}
            setSearch4={setSearch4}
            getUsers={getUsers}
          />
        </header>
        <body>
          <Show
            getUsers={getUsers}
            users={users}
            initialP={initialP}
            finalP={finalP}
          />
        </body>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={users && Math.ceil(users.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por nombre************************* */
  } else if (search && !search2 && !search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            setSearch2={setSearch2}
            search2={search2}
            search={search}
            setSearch={setSearch}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <ShowSearch results={results} initialP={initialP} finalP={finalP} />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results && Math.ceil(results.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por nit************************* */
  } else if (search2 && !search && !search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNit results2={results2} initialP={initialP} finalP={finalP} />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por Razon social************************* */
  } else if (!search2 && !search && search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            setSearch3={setSearch3}
            search4={search4}
            setSearch4={setSearch4}
          />
        </header>
        <div>
          <SearchSr results3={results3} initialP={initialP} finalP={finalP} />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usa el buscador por telefono************************* */
  } else if (!search2 && !search && !search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            setSearch3={setSearch3}
            search4={search4}
            setSearch4={setSearch4}
          />
        </header>
        <div>
          <SearchTelf results4={results4} initialP={initialP} finalP={finalP} />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores: nombre y nit************************* */
  } else if (search && search2 && !search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNitName
            resultss={resultss}
            search2={search2}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:razon y telefono*********************** */
  } else if (!search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchTelfSr
            resultss3={resultss3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nit y razon************************* */
  } else if (!search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNitSr
            resultss2={resultss2}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nit y telf************************* */
  } else if (!search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchTelfNit
            resultss2={resultss2}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nombre y telf************************* */
  } else if (search && !search2 && !search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchTelfName
            resultss={resultss}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*******************Si se usan ambos buscadores:nombre y razon************************* */
  } else if (search && !search2 && search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNameSr
            resultss={resultss}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, nit y razon******************** */
  } else if (search && search2 && search3 && !search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNameNitSr
            resultss={resultss}
            search2={search2}
            search3={search3}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nit, razon y telf******************** */
  } else if (!search && search2 && search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNitRsTelf
            resultss2={resultss2}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, nit y telf******************** */
  } else if (search && search2 && !search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNameNitTelf
            resultss={resultss}
            search2={search2}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*************Si se usan 3 buscadores:nombre, razon y telf******************** */
  } else if (search && !search2 && search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNameSrTelf
            resultss={resultss}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
    /********************************************* */
    /********************************************* */
    /*************Si se usan los 4 buscadores******************** */
  } else if (search && search2 && search3 && search4) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            search={search}
            setSearch={setSearch}
            setSearch2={setSearch2}
            search2={search2}
            setPage={setPage}
            getUsers={getUsers}
            search3={search3}
            search4={search4}
            setSearch4={setSearch4}
            setSearch3={setSearch3}
          />
        </header>
        <div>
          <SearchNameSrTelf
            resultss={resultss}
            search2={search2}
            search3={search3}
            search4={search4}
            initialP={initialP}
            finalP={finalP}
          />
        </div>
        <footer className="footer">
          <Pagination
            page={page}
            pagesLength={results2 && Math.ceil(results2.length / perPage)}
            setPage={setPage}
          />
        </footer>
      </div>
    );
  }
}

export default App;
