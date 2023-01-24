import "../../css/pagination.css";
import { Footer } from "../../types/footer";
const Pagination = ({ page, pagesLength, setPage }: Footer) => {
  const pagesPerBlock = 5;
  let currentBlock;
  let blockLength;
  if (page !== undefined) {
    currentBlock = Math.ceil(page / pagesPerBlock);
  }
  if (pagesLength) {
    blockLength = Math.ceil(pagesLength / pagesPerBlock);
  }

  const arrPages: number[] = [];
  let initialPage;
  if (currentBlock !== undefined) {
    initialPage = (currentBlock - 1) * pagesPerBlock + 1;
  }
  let limitPage;
  if (currentBlock !== undefined) {
    limitPage =
      blockLength === currentBlock ? pagesLength : currentBlock * pagesPerBlock;
  }
  if (initialPage !== undefined && limitPage !== undefined) {
    for (let i = initialPage; i <= limitPage; i++) {
      arrPages.push(i);
    }
  }

  const handlePrev = () => {
    if (page !== undefined && setPage !== undefined) {
      setPage(page - 1);

      setPage(page - 1);
    }
  };
  const handleNext = () => {
    if (page !== undefined && setPage !== undefined) {
      setPage(page + 1);
    }
  };
  const handlePage = (currentPage: number) => {
    if (setPage !== undefined) {
      setPage(currentPage);
    }
  };

  return (
    <div className="pagination">
      {page
        ? page > 1 && (
            <div onClick={handlePrev} className="pagination__prev">
              <i className="bx bxs-chevron-left-circle left"></i>
            </div>
          )
        : ""}

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
      {pagesLength && page
        ? page < pagesLength && (
            <div onClick={handleNext} className="pagination__next">
              <i className="bx bxs-chevron-right-circle right"></i>
            </div>
          )
        : ""}
    </div>
  );
};

export default Pagination;
