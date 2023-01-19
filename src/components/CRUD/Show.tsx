import { PropsSerchers } from "../../types/PropSerchers";
import Pagination from "../Pagination";

const Show = ({
  users,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}: PropsSerchers) => {
  return (
    <div>
      <article className="card__container">
        {users?.slice(initialP, finalP).map((user) => (
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
          pagesLength={(users && Math.ceil(users.length / perPage)) || 0}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default Show;
