import React from "react";

const SearchNameNitSr = ({ initialP, finalP, resultss, search3, search2 }) => {
  let arr2 = [];
  if (resultss) {
    arr2 = resultss?.filter((dato6) =>
      dato6.nit.toString().toLowerCase().includes(search2.toLocaleLowerCase())
    );
  }
  let results6 = arr2?.filter((dato6) =>
    dato6.businessName
      .toString()
      .toLowerCase()
      .includes(search3.toLocaleLowerCase())
  );

  console.log(results6);
  return (
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
  );
};

export default SearchNameNitSr;
