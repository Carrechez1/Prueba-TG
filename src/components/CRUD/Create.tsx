import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Create_ } from "../../types/create";

const Create = ({ setOpenForm, getUsers }: Create_) => {
  const [name, setName] = useState("Nombre");
  const [businessName, setBusinessName] = useState("Razon Social");
  const [nit, setNit] = useState("123456");
  const [telf, setTelf] = useState("+58-416-1234567");
  const [code, setCode] = useState("Codigo");

  const usersCollection = collection(db, "users");

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const store = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    await addDoc(usersCollection, {
      name: name,
      businessName: businessName,
      nit: nit,
      telf: telf,
      code: code,
    });
    handleCloseForm();
    getUsers();
  };
  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit} className="form">
      <div onClick={handleCloseForm} className="form__x">
        X
      </div>
      <h2 className="form__title">Crear nuevo usuario</h2>
      <ul className="form__list">
        <li className="form__item">
          <label htmlFor="name">Nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="businessName">Razon social</label>
          <input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            type="text"
          />
        </li>
        <li className="form__item">
          <label htmlFor="nit">Nit</label>
          <input
            value={nit}
            onChange={(e) => setNit(e.target.value)}
            type="number"
          />
        </li>
        <li className="form__item">
          <label htmlFor="telf">Telefono</label>
          <input
            value={telf}
            onChange={(e) => setTelf(e.target.value)}
            type="tel"
          />
        </li>
        <li className="form__item">
          <label htmlFor="code">Codigo</label>
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            type="text"
          />
        </li>
      </ul>
      <button className="form__btn">Crear usuario</button>
    </form>
  );
};

export default Create;
