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
  /******************crear nuevo arreglo para la busqueda combinada*********************** */
  let resultss = [];
  if (search) {
    resultss = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }
  /*********************mostrar datos que llegan************************ */
  useEffect(() => {
    getUsers();
  }, []);
  /********************************************* */
  /********************************************* */
  /*******************Si no se usa ningun buscador mostrara************************* */
  if (!search && !search2) {
    return (
      <div className="App">
        <header className="header">
          <DropDown
            setSearch2={setSearch2}
            search2={search2}
            search={search}
            setSearch={setSearch}
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
  } else if (search && !search2) {
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
  } else if (search2 && !search) {
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
    /*******************Si se usan ambos buscadores************************* */
  } else if (search && search2) {
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
  }
}

export default App;
