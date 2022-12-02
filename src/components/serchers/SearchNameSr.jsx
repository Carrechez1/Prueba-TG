import React from "react";

const SearchNameSr = ({ initialP, finalP, resultss, search3 }) => {
  let results5 = resultss?.filter((dato5) =>
    dato5.businessName
      .toString()
      .toLowerCase()
      .includes(search3.toLocaleLowerCase())
  );

  return (
    <article className="card__container2">
      {results5.slice(initialP, finalP).map((user) => (
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
  );
};

export default SearchNameSr;
