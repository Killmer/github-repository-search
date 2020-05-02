import React, { Component } from "react";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "./styles/StyledSearchBar";
import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    inputValue: "",
  };

  timeOut = null;
  doSearch = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;

    this.setState({ inputValue: value });
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      const { inputValue } = this.state;
      onChange(inputValue);
    }, 500);
  };
  render() {
    const { inputValue } = this.state;

    return (
      <StyledSearchBar>
        <StyledSearchBarContent>
          <input
            type="text"
            placeholder="Search Repositories"
            onChange={this.doSearch}
            value={inputValue}
          />
        </StyledSearchBarContent>
      </StyledSearchBar>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBar;
