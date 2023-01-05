import React from "react";
import Pagination from "../Pagination";
const SearchNameNitTelf = ({
  initialP,
  finalP,
  newSearcherName,
  searchNit,
  searchTelf,
  page,
  setPage,
  perPage,
}) => {
  let searchNameNit = [];
  if (newSearcherName) {
    searchNameNit = newSearcherName?.filter((dato) =>
      dato.nit.toString().toLowerCase().includes(searchNit.toLocaleLowerCase())
    );
  }
  let searchNameNitTelf = searchNameNit?.filter((dato) =>
    dato.telf.toString().toLowerCase().includes(searchTelf.toLocaleLowerCase())
  );

  if (searchNameNitTelf?.length == 0) {
    searchNameNitTelf = false;
  }
  return (
    <div>
      {searchNameNitTelf ? (
        <div>
          <article className="card__container2">
            {searchNameNitTelf.slice(initialP, finalP).map((user) => (
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
                searchNameNitTelf &&
                Math.ceil(searchNameNitTelf.length / perPage)
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

export default SearchNameNitTelf;
