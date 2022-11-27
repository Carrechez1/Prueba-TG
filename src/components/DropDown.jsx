import React, { useState } from "react";
import Create from "./CRUD/Create";
import SearchComponent from "./SearchComponent";
import SearchComponentNit from "./SearchComponentNit";
import "../css/dropDown.css";

const DropDown = ({
  search,
  setSearch,
  search2,
  setSearch2,
  setPage,
  getUsers,
}) => {
  /***********************declaramos estados******************************* */
  const [dropdown, setDropdown] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  /****************logica para abrir/cerrar el dropdown***************** */
  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };
  /*********************logica para cerrar el formulario*************************** */
  const handleOpenForm = () => {
    setOpenForm(true);
  };
  /*********************se muestra el drop down********************** */
  return (
    <div className="dropDown__container">
      <button className="dropDown__open-close" onClick={openCloseDropdown}>
        {!dropdown ? (
          <i className="bx bxs-chevrons-right"></i>
        ) : (
          <i class="bx bxs-chevrons-left"></i>
        )}
      </button>
      {dropdown ? (
        <div className="dropDown__menu">
          <div className="open__container">
            <div onClick={handleOpenForm} className="open__info">
              Crear usuario&nbsp;
            </div>
          </div>
          <div className={openForm ? `form__container` : `form__none`}>
            <Create getUsers={getUsers} setOpenForm={setOpenForm} />
          </div>
          <div>
            <SearchComponent
              search={search}
              setSearch={setSearch}
              setPage={setPage}
            />
          </div>
          <div>
            <SearchComponentNit
              search2={search2}
              setSearch2={setSearch2}
              setPage={setPage}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropDown;
