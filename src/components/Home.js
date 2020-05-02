import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import Grid from "./Grid";
import RepositoryDetails from "./RepositoryDetails";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import Error from "./Error";

import withRepositories from "../HOC/withRepositories";

class Home extends Component {
  static propTypes = {
    repositories: PropTypes.array.isRequired,
    fetchRepositories: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  };

  searchRepositories = (search) => {
    if (!search) return;
    const { fetchRepositories } = this.props;
    const endpoint = `https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1`;
    fetchRepositories(endpoint);
  };

  handleClick = (endpoint) => {
    const { fetchRepositories } = this.props;

    fetchRepositories(endpoint);
  };

  render() {
    const {
      error,
      loading,
      repositories,
      pagginationLinks,
      currentPage,
      lastPage,
    } = this.props;

    if (error) return <Error />;

    return (
      <>
        <SearchBar onChange={this.searchRepositories} />
        {loading && <Spinner />}
        {!loading && (
          <>
            {repositories.length !== 0 &&
              Object.keys(pagginationLinks).lenght !== 0 && (
                <Pagination
                  currentPage={currentPage}
                  lastPage={lastPage}
                  pagginationLinks={pagginationLinks}
                  handleClick={this.handleClick}
                />
              )}

            <Grid>
              {repositories.length !== 0 &&
                repositories.map((repository) => {
                  return (
                    <RepositoryDetails
                      key={repository.id}
                      name={repository.name}
                      description={repository.description}
                      stars={repository.stargazers_count}
                      watchers={repository.watchers_count}
                      url={repository.html_url}
                    />
                  );
                })}
            </Grid>
          </>
        )}
      </>
    );
  }
}

export default withRepositories(Home);
