import React, { useState } from "react";
import Create from "./CRUD/Create";
import SearchComponentNit from "./search/SearchComponentNit";
import "../../css/dropDown.css";
import SearchComponentTelf from "./search/SearchComponentTelf";
import SearchComponentName from "./search/SearchComponentName";
import SearchComponentBusinessName from "./search/SearchComponentBusinessName";

import { PropsDropDown } from "../../types/PropsDropDown";

const DropDown = ({
  searchName,
  setSearchName,
  searchNit,
  setSearchNit,
  searchBusinessName,
  setSearchBusinessName,
  searchTelf,
  setSearchTelf,
  setPage,
  getUsers,
}: PropsDropDown) => {
  const [dropdown, setDropdown] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const openCloseDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  return (
    <div className="dropDown__container">
      <button className="dropDown__open-close" onClick={openCloseDropdown}>
        {!dropdown ? (
          <i className="bx bxs-chevrons-right"></i>
        ) : (
          <i className="bx bxs-chevrons-left"></i>
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
          <div className="searchs">
            <div>
              <SearchComponentName
                searchName={searchName}
                setSearchName={setSearchName}
                setPage={setPage}
              />
            </div>
            <div>
              <SearchComponentNit
                searchNit={searchNit}
                setSearchNit={setSearchNit}
                setPage={setPage}
              />
            </div>
            <div>
              <SearchComponentBusinessName
                searchBusinessName={searchBusinessName}
                setSearchBusinessName={setSearchBusinessName}
                setPage={setPage}
              />
            </div>
            <div>
              <SearchComponentTelf
                searchTelf={searchTelf}
                setSearchTelf={setSearchTelf}
                setPage={setPage}
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropDown;
