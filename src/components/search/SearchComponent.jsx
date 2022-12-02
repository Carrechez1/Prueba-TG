import React from "react";

const SearchComponent = ({ search, setSearch, setPage }) => {
  /***********logica del buscador y reseteo de pagina al usar el buscador*************** */
  const searcher = (e) => {
    setSearch(e.target.value);
    setPage(1);
  };
  /*************************************************** */
  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Nombre"
      />
    </div>
  );
};

export default SearchComponent;
