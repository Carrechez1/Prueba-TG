import React from "react";
import { PropsSerchers } from "../../types/PropSerchers";
import Pagination from "../Pagination";
const SearchNameBusinessNameTelf = ({
  initialP,
  finalP,
  newSearcherName,
  searchTelf,
  searchBusinessName,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let searchNameBusinessName: typeof newSearcherName = [];
  if (newSearcherName !== undefined) {
    searchNameBusinessName = newSearcherName?.filter((dato) => {
      if (searchBusinessName !== undefined) {
        if (dato.businessName !== undefined) {
          return dato.businessName
            .toString()
            .toLowerCase()
            .includes(searchBusinessName.toLocaleLowerCase());
        }
      }
    });
  }
  let searchNameBusinessNameTelf = searchNameBusinessName?.filter((dato) => {
    if (searchTelf !== undefined) {
      if (dato.telf !== undefined) {
        return dato.telf
          .toString()
          .toLowerCase()
          .includes(searchTelf.toLocaleLowerCase());
      }
    }
  });
  let searcherNameBusinessNameTelf = false;
  if (searchNameBusinessNameTelf?.length !== 0) {
    searcherNameBusinessNameTelf = true;
  }
  return (
    <div>
      {searcherNameBusinessNameTelf ? (
        <div>
          <article className="card__container2">
            {searchNameBusinessNameTelf.slice(initialP, finalP).map((user) => (
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
                searchNameBusinessNameTelf &&
                Math.ceil(searchNameBusinessNameTelf.length / perPage)
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

export default SearchNameBusinessNameTelf;
