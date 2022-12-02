import React from "react";
import Pagination from "../Pagination";
const SearchTelf = ({ results4, initialP, finalP, page, setPage, perPage }) => {
  /*****Se muestran los elementos filtrados por telefono y se aplica logica de paginacion****/
  return (
    <div>
      <article className="card__container2">
        {results4.slice(initialP, finalP).map((user) => (
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
          pagesLength={results4 && Math.ceil(results4.length / perPage)}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default SearchTelf;
