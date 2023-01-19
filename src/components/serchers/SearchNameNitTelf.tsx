import { PropsSerchers } from "../../types/PropSerchers";
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
}: PropsSerchers) => {
  let searchNameNit: typeof newSearcherName = [];

  if (newSearcherName) {
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
  let searchNameNitTelf = searchNameNit?.filter((dato) => {
    if (searchTelf !== undefined) {
      if (dato.telf !== undefined) {
        return dato.telf
          .toString()
          .toLowerCase()
          .includes(searchTelf.toLocaleLowerCase());
      }
    }
  });
  let searcherNameNitTelf = false;
  if (searchNameNitTelf?.length !== 0) {
    searcherNameNitTelf = true;
  }
  return (
    <div>
      {searcherNameNitTelf ? (
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