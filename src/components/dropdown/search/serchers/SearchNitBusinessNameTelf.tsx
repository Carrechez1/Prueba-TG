import React from "react";
import { PropsSerchers } from "../../../../types/PropSerchers";
import Pagination from "../../../body/Pagination";
const SearchNitBusinessNameTelf = ({
  initialP,
  finalP,
  newSearcherNit,
  searchBusinessName,
  searchTelf,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let searchNitBusinessName: typeof newSearcherNit = [];
  if (newSearcherNit !== undefined) {
    searchNitBusinessName = newSearcherNit?.filter((dato) => {
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
  let searchNitBusinessNameTelf = searchNitBusinessName?.filter((dato) => {
    if (searchTelf !== undefined) {
      if (dato.telf !== undefined) {
        return dato.telf
          .toString()
          .toLowerCase()
          .includes(searchTelf.toLocaleLowerCase());
      }
    }
  });
  let searcherNitBusinessNameTelf = false;
  if (searchNitBusinessNameTelf?.length !== 0) {
    searcherNitBusinessNameTelf = true;
  }
  return (
    <div>
      {searcherNitBusinessNameTelf ? (
        <div>
          <article className="card__container2">
            {searchNitBusinessNameTelf.slice(initialP, finalP).map((user) => (
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
                searchNitBusinessNameTelf &&
                Math.ceil(searchNitBusinessNameTelf.length / perPage)
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

export default SearchNitBusinessNameTelf;
