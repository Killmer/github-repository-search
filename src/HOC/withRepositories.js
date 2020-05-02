import React, { Component } from "react";

import parseLinkHeader from "../helpers/parseLinkHeader";
import getPage from "../helpers/getPage";

const withRepositories = (WrappedComponent) => {
  class withRepositories extends Component {
    state = {
      repositories: [],
      loading: false,
      error: false,
      pagginationLinks: {},
      lastPage: "",
      currentPage: "",
    };

    componentWillUnmount() {
      this.controller.abort()
    }

    fetchRepositories = async (endpoint) => {
      this.setState({ loading: true, error: false });
      
      try {
        if(sessionStorage[endpoint]) {
          this.setState(JSON.parse(sessionStorage[endpoint]));
        } else {

          this.controller = new AbortController();
          const signal = this.controller.signal;

          const response = await fetch(endpoint, { signal });
          const result = await response.json();
          const linkHeader = response.headers.get("link");
          const pagginationLinks = parseLinkHeader(linkHeader);
          const currentPage = getPage(endpoint);
          const lastPage = pagginationLinks.last
            ? getPage(pagginationLinks.last)
            : currentPage;
  
          this.setState(
            (prev) => ({
              ...prev,
              repositories: [...result.items],
              loading: false,
              pagginationLinks,
              lastPage,
              currentPage,
            }),
            () => {
              sessionStorage.setItem(endpoint, JSON.stringify(this.state));
            }
          );
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.warn('Fetch repository request has been aborted');
          return;
        }
        this.setState({ error: true });
        console.log(error);
      }
    };
    render() {
      const {
        repositories,
        error,
        loading,
        pagginationLinks,
        lastPage,
        currentPage,
      } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          loading={loading}
          error={error}
          pagginationLinks={pagginationLinks}
          fetchRepositories={this.fetchRepositories}
          repositories={repositories}
          lastPage={lastPage}
          currentPage={currentPage}
        />
      );
    }
  }

  return withRepositories;
};

export default withRepositories;
