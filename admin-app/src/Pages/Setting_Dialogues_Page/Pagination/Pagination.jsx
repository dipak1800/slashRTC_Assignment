import React, { Fragment } from "react";
import Style from "./Pagination.module.scss";
function Pagination({ itemsPerPage, totalItems, paginate }) {
  const PageNumbers = [];
  for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
    PageNumbers.push(i);
  }
  return (
    <div className={Style.main_Div}>
      <ul className={Style.pagination}>
        {PageNumbers.map((pageNumber, i) => (
          <Fragment key={i}>
            <li
              onClick={() => paginate(pageNumber)}
              className={Style.page_Item}
            >
              <span className={Style.Page_Link}>{pageNumber}</span>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
