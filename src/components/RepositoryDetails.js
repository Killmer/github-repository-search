import React from "react";
import PropTypes from "prop-types";

import { StyledRepositoryDetails } from "./styles/StyledRepositoryDetails";

const RepositoryDetails = ({ name, description, stars, watchers, url }) => (
  <StyledRepositoryDetails>
    <h2 className="title">
      <a href={url} rel="noopener noreferrer" target="_blank">{name}</a>
    </h2>
    <p className="description">{description}</p>
    <div className="details">
      <span>
        {stars} - stars{" "}
        <span role="img" aria-label="star">
          ⭐️
        </span>
      </span>
      <span>
        {watchers} - watchers{" "}
        <span role="img" aria-label="watchers">
          🧐
        </span>
      </span>
    </div>
  </StyledRepositoryDetails>
);

RepositoryDetails.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  stars: PropTypes.number,
  watchers: PropTypes.number,
  url: PropTypes.string,
}

export default RepositoryDetails;
