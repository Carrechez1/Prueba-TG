import React from "react";
import { PropsSerchers } from "../../types/PropSerchers";
import Pagination from "../Pagination";
const SearchNameNitBusinessName = ({
  initialP,
  finalP,
  newSearcherName,
  searchBusinessName,
  searchNit,
  page,
  perPage,
  setPage,
}: PropsSerchers) => {
  let searchNitName: typeof newSearcherName = [];
  if (newSearcherName !== undefined) {
    searchNitName = newSearcherName?.filter((dato) => {
      if (searchNit !== undefined) {
        if (dato.nit !== undefined) {
          return dato.nit
            .toString()
            .toLowerCase()
            .includes(searchNit.toLocaleLowerCase());
        }
      }
    });
  }
  let searchNitNameBusinessName = searchNitName?.filter((dato) => {
    if (searchBusinessName !== undefined) {
      if (dato.businessName !== undefined) {
        return dato.businessName
          .toString()
          .toLowerCase()
          .includes(searchBusinessName.toLocaleLowerCase());
      }
    }
  });
  let searcherNitNameBusinessName = false;
  if (searchNitNameBusinessName?.length !== 0) {
    searcherNitNameBusinessName = true;
  }
  return (
    <div>
      {searcherNitNameBusinessName ? (
        <div>
          <article className="card__container2">
            {searchNitNameBusinessName.slice(initialP, finalP).map((user) => (
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
              pagesLength={
                searchNitNameBusinessName &&
                Math.ceil(searchNitNameBusinessName.length / perPage)
              }
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

export default SearchNameNitBusinessName;
