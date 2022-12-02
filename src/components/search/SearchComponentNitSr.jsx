import React from "react";

const SearchComponentNitSr = ({ search3, setSearch3, setPage }) => {
  /***********logica del buscador y reseteo de pagina al usar el buscador*************** */
  const searcher3 = (e) => {
    setSearch3(e.target.value);
    setPage(1);
  };
  /*************************************************** */
  return (
    <div>
      <input
        value={search3}
        onChange={searcher3}
        type="text"
        placeholder="Razon social"
      />
    </div>
  );
};

export default SearchComponentNitSr;
