import React from "react";
import { PropsSerchers } from "../../types/PropSerchers";
import Pagination from "../Pagination";
const SearchNitName = ({
  initialP,
  finalP,
  newSearcherName,
  searchNit,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let searchNitName = newSearcherName?.filter((dato) => {
    if (searchNit !== undefined) {
      if (dato.nit !== undefined) {
        return dato.nit
          .toString()
          .toLowerCase()
          .includes(searchNit.toLocaleLowerCase());
      }
    }
  });
  let searcherNitName = false;
  if (searchNitName?.length !== 0) {
    searcherNitName = true;
  }
  return (
    <div>
      {searcherNitName ? (
        <div>
          <article className="card__container2">
            {searchNitName?.slice(initialP, finalP).map((user) => (
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
                (searchNitName && Math.ceil(searchNitName.length / perPage)) ||
                0
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

export default SearchNitName;
