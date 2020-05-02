import React from "react";
import { Link } from "@reach/router";

import GithubLogo from "./images/github-logo.png";

import { StyledHeader, StyledGithubLogo } from "./styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <StyledGithubLogo src={GithubLogo} alt="github-logo" />
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
