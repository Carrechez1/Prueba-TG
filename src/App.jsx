import { useEffect, useState } from "react";
import "./css/App.css";
import DropDown from "./components/DropDown";
import { collection, getDocs, getDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [search4, setSearch4] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const usersCollection = collection(db, "users");
  const getUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data?.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <DropDown
          setSearch2={setSearch2}
          search2={search2}
          search={search}
          setSearch={setSearch}
          search3={search3}
          setSearch3={setSearch3}
          search4={search4}
          setPage={setPage}
          setSearch4={setSearch4}
          getUsers={getUsers}
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              search={search}
              search2={search2}
              search3={search3}
              search4={search4}
              getUsers={getUsers}
              page={page}
              setPage={setPage}
              perPage={perPage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
