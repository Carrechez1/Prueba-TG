import React from "react";

const SearchComponentNit = ({ search2, setSearch2, setPage }) => {
  /***********logica del buscador y reseteo de pagina al usar el buscador*************** */
  const searcher2 = (e) => {
    setSearch2(e.target.value);
    setPage(1);
  };
  /*************************************************** */
  return (
    <div>
      <input
        value={search2}
        onChange={searcher2}
        type="text"
        placeholder="Nit"
      />
    </div>
  );
};

export default SearchComponentNit;
