import React from "react";
import "../css/pagination.css";
const Pagination = ({ page, pagesLength, setPage }) => {
  /********************declaracion de elementos por bloque**************************** */
  const pagesPerBlock = 5;
  /***********************bloque actual y longitud************************************* */
  const currentBlock = Math.ceil(page / pagesPerBlock);
  const blockLength = Math.ceil(pagesLength / pagesPerBlock);
  /*****pagina de inicio, limite de paginas por bloque y push en el arreglo de paginas***** */
  const arrPages = [];
  const initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  const limitPage =
    blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
  for (let i = initialPage; i <= limitPage; i++) {
    arrPages.push(i);
  }
  /*************logica para avanzar, retroceder y seleccionar paginas***************** */
  const handlePrev = () => {
    setPage(page - 1);
  };
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePage = (currentPage) => {
    setPage(currentPage);
  };
  /************************************** */
  /**************************************** */
  /*************************************** */
  return (
    <div className="pagination">
      {page > 1 && (
        <div onClick={handlePrev} className="pagination__prev">
          <i className="bx bxs-chevron-left-circle left"></i>
        </div>
      )}

      <ul className="pagination__container">
        {arrPages.map((e) => (
          <li
            className={` pagination__page ${page == e && "pagination__active"}`}
            onClick={() => handlePage(e)}
            key={e}
          >
            {e}
          </li>
        ))}
      </ul>
      {page < pagesLength && (
        <div onClick={handleNext} className="pagination__next">
          <i class="bx bxs-chevron-right-circle right"></i>
        </div>
      )}
    </div>
  );
};

export default Pagination;
