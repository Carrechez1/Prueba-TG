import React from "react";
import Pagination from "../Pagination";
const SearchNameSrTelf = ({
  initialP,
  finalP,
  resultss,
  search3,
  search4,
  page,
  setPage,
  perPage,
}) => {
  let arr2 = [];
  if (resultss) {
    arr2 = resultss?.filter((dato6) =>
      dato6.businessName
        .toString()
        .toLowerCase()
        .includes(search3.toLocaleLowerCase())
    );
  }
  let results6 = arr2?.filter((dato6) =>
    dato6.telf.toString().toLowerCase().includes(search4.toLocaleLowerCase())
  );

  return (
    <div>
      <article className="card__container2">
        {results6.slice(initialP, finalP).map((user) => (
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
          pagesLength={results6 && Math.ceil(results6.length / perPage)}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default SearchNameSrTelf;
