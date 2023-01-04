import React from "react";
import Pagination from "../Pagination";
const SearchNitBusinessName = ({
  initialP,
  finalP,
  newSearcherNit,
  search3,
  page,
  setPage,
  perPage,
}) => {
  let searchNitBusinessName = newSearcherNit?.filter((dato) =>
    dato.businessName
      .toString()
      .toLowerCase()
      .includes(search3.toLocaleLowerCase())
  );

  if (searchNitBusinessName?.length == 0) {
    searchNitBusinessName = false;
  }

  return (
    <div>
      {searchNitBusinessName ? (
        <div>
          <article className="card__container2">
            {searchNitBusinessName.slice(initialP, finalP).map((user) => (
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
                searchNitBusinessName &&
                Math.ceil(searchNitBusinessName.length / perPage)
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

export default SearchNitBusinessName;
