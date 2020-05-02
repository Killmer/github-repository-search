import React from "react";
import PropTypes from "prop-types";

import { StyledPagination } from "./styles/StyledPagination";

const Pagination = ({
  currentPage,
  lastPage,
  pagginationLinks,
  handleClick,
}) => (
  <StyledPagination>
    <button
      disabled={!pagginationLinks.first}
      onClick={() => handleClick(pagginationLinks.first)}
    >
      First
    </button>
    <button
      disabled={!pagginationLinks.prev}
      onClick={() => handleClick(pagginationLinks.prev)}
    >
      Prev
    </button>
    <span>
      {currentPage} 
      {lastPage && ` of ${lastPage}`}
    </span>
    <button
      disabled={!pagginationLinks.next}
      onClick={() => handleClick(pagginationLinks.next)}
    >
      Next
    </button>
    <button
      disabled={!pagginationLinks.last}
      onClick={() => handleClick(pagginationLinks.last)}
    >
      Last
    </button>
  </StyledPagination>
);

Pagination.propTypes = {
  currentPage: PropTypes.string,
  lastPage: PropTypes.string,
  pagginationLinks: PropTypes.object,
  handleClick: PropTypes.func,
}

export default Pagination;
