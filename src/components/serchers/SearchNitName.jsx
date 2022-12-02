import React from "react";
import Pagination from "../Pagination";
const SearchNitName = ({
  initialP,
  finalP,
  resultss,
  search2,
  page,
  setPage,
  perPage,
}) => {
  let results3 = resultss?.filter((dato3) =>
    dato3.nit.toString().toLowerCase().includes(search2.toLocaleLowerCase())
  );

  return (
    <div>
      <article className="card__container2">
        {results3.slice(initialP, finalP).map((user) => (
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
          pagesLength={results3 && Math.ceil(results3.length / perPage)}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default SearchNitName;
