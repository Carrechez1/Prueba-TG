import React from 'react'

const SearchComponentTelf = ({ search4, setSearch4, setPage }) => {
  /***********logica del buscador y reseteo de pagina al usar el buscador*************** */
  const searcher4 = (e) => {
    setSearch4(e.target.value);
    setPage(1);
  };
  /*************************************************** */
  return (
    <div>
      <input
        value={search4}
        onChange={searcher4}
        type="text"
        placeholder="Telefono"
      />
    </div>
  );
};

export default SearchComponentTelf