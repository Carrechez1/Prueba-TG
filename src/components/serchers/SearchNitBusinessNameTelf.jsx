import React from "react";
import Pagination from "../Pagination";
const SearchNitBusinessNameTelf = ({
  initialP,
  finalP,
  newSearcherNit,
  searchBusinessName,
  searchTelf,
  page,
  setPage,
  perPage,
}) => {
  let searchNitBusinessName = [];
  if (newSearcherNit) {
    searchNitBusinessName = newSearcherNit?.filter((dato) =>
      dato.businessName
        .toString()
        .toLowerCase()
        .includes(searchBusinessName.toLocaleLowerCase())
    );
  }
  let searchNitBusinessNameTelf = searchNitBusinessName?.filter((dato) =>
    dato.telf.toString().toLowerCase().includes(searchTelf.toLocaleLowerCase())
  );

  if (searchNitBusinessNameTelf?.length == 0) {
    searchNitBusinessNameTelf = false;
  }
  return (
    <div>
      {searchNitBusinessNameTelf ? (
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
