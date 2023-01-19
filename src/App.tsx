import { useEffect, useState } from "react";
import "./css/App.css";
import DropDown from "./components/DropDown";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { User } from "./types/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchName, setSearchName] = useState("");
  const [searchNit, setSearchNit] = useState("");
  const [searchBusinessName, setSearchBusinessName] = useState("");
  const [searchTelf, setSearchTelf] = useState("");
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
          setSearchNit={setSearchNit}
          searchNit={searchNit}
          searchName={searchName}
          setSearchName={setSearchName}
          searchBusinessName={searchBusinessName}
          setSearchBusinessName={setSearchBusinessName}
          searchTelf={searchTelf}
          setPage={setPage}
          setSearchTelf={setSearchTelf}
          getUsers={getUsers}
        />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              users={users}
              searchName={searchName}
              searchNit={searchNit}
              searchBusinessName={searchBusinessName}
              searchTelf={searchTelf}
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
