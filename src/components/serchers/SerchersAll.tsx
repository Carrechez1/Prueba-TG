import React from "react";
import { PropsSerchers } from "../../types/PropSerchers";
import Pagination from "../Pagination";
const SerchersAll = ({
  initialP,
  finalP,
  newSearcherName,
  searchBusinessName,
  searchNit,
  searchTelf,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  let searchNameNit: typeof newSearcherName = [];
  if (newSearcherName !== undefined) {
    searchNameNit = newSearcherName?.filter((dato) => {
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
  let searchNameNitBusinessName: typeof searchNameNit = [];
  if (searchNameNit !== undefined) {
    searchNameNitBusinessName = searchNameNit?.filter((dato) => {
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
  let searchNameNitBusinessNameTelf = searchNameNitBusinessName?.filter(
    (dato) => {
      if (searchTelf !== undefined) {
        if (dato.telf !== undefined) {
          return dato.telf
            .toString()
            .toLowerCase()
            .includes(searchTelf.toLocaleLowerCase());
        }
      }
    }
  );
  let searcherNameNitBusinessNameTelf = false;
  if (searchNameNitBusinessNameTelf?.length !== 0) {
    searcherNameNitBusinessNameTelf = true;
  }
  return (
    <div>
      {searcherNameNitBusinessNameTelf ? (
        <div>
          <article className="card__container2">
            {searchNameNitBusinessNameTelf
              .slice(initialP, finalP)
              .map((user) => (
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
                searchNameNitBusinessNameTelf &&
                Math.ceil(searchNameNitBusinessNameTelf.length / perPage)
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

export default SerchersAll;
