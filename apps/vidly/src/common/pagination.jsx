import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { totalItems, itemsPerPage, handlePageChange, currentPage } = props;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = _.range(1, totalPages + 1);
  const paginationComponent = (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => handlePageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
  if (totalPages === 1) {
    return null;
  }
  return paginationComponent;
};

Pagination.propTypes = {
  totalItems: propTypes.number.isRequired,
  itemsPerPage: propTypes.number.isRequired,
  handlePageChange: propTypes.func.isRequired,
  currentPage: propTypes.number.isRequired,
};

export default Pagination;
