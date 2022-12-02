import React from "react";
import Pagination from "../Pagination";
const SearchNit = ({ results2, initialP, finalP, page, setPage, perPage }) => {
  /*****Se muestran los elementos filtrados por nit y se aplica logica de paginacion****/
  return (
    <div>
      <article className="card__container2">
        {results2.slice(initialP, finalP).map((user) => (
          <div className="card" key={user.id}>
            <header className="card__header">
              <h2 className="card__title">{user.name}</h2>
            </header>
            <ul className="card__list">
              <div className="card__info">
                <li className="card__item ">
                  <strong>Razon social: </strong>
                  {user.businessName}
                </li>
                <li className="card__item ">
                  <strong>Nit: </strong>
                  {user.nit}
                </li>
                <li className="card__item ">
                  <strong>Telefono: </strong>
                  {user.telf}
                </li>
                <li className="card__item ">
                  <strong>Codigo:</strong> {user.code}
                </li>
              </div>
            </ul>
          </div>
        ))}
      </article>
      <footer className="footer">
        <Pagination
          page={page}
          pagesLength={results2 && Math.ceil(results2.length / perPage)}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default SearchNit;
