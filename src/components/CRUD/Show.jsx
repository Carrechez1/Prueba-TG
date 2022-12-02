import { deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Pagination from "../Pagination";
const MySwal = withReactContent(Swal);

const Show = ({
  getUsers,
  users,
  initialP,
  finalP,
  page,
  setPage,
  perPage,
}) => {
  /********************funcion para eliminar usuario*********************************** */
  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  //   getUsers();
  // };

  /*************************************************** */

  /**********mostramos los datos que llegan y aplicamos logica de paginacion************* */
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
          pagesLength={users && Math.ceil(users.length / perPage)}
          setPage={setPage}
        />
      </footer>
    </div>
  );
};

export default Show;
