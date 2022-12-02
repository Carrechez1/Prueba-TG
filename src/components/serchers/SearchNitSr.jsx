import React from "react";
import Pagination from "../Pagination";
const SearchNitSr = ({
  initialP,
  finalP,
  resultss2,
  search3,
  page,
  setPage,
  perPage,
}) => {
  /*******logica para buscar por 2 elementos******* */
  let results4 = resultss2?.filter((dato4) =>
    dato4.businessName
      .toString()
      .toLowerCase()
      .includes(search3.toLocaleLowerCase())
  );
  /*****************cuando el arreglo este vacio sera falso******************** */
  if (results4?.length == 0) {
    results4 = false;
  }

  return (
    <div>
      {results4 ? (
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
      ) : (
        <div className="notFound">
          <p className="message">USUARIO NO ENCONTRADO</p>
          <img className="img" src="/no-encontrado.png" alt="" />
          <footer className="footer2"></footer>
        </div>
      )}
    </div>
  );
};

export default SearchNitSr;
