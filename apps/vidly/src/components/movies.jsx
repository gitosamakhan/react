import React, { Component } from "react";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  allGenres = { name: "All Genres", _id: 1 };

  state = {
    genres: [],
    movies: [],
    itemsPerPage: 4,
    currentPage: 1,
    currentGenre: this.allGenres,
    sortColumn: { column: "title", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      genres: [this.allGenres, ...getGenres()],
      movies: getMovies(),
    });
  }

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter((m) => m._id !== movie._id),
    });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const filteredMovies =
      this.state.currentGenre && this.state.currentGenre._id !== 1
        ? this.state.movies.filter(
            (m) => this.state.currentGenre._id === m.genre._id
          )
        : this.state.movies;
    const sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortColumn.column],
      [this.state.sortColumn.order]
    );
    const paginatedMovies = paginate(
      sortedMovies,
      this.state.currentPage,
      this.state.itemsPerPage
    );
    if (this.state.movies.length === 0) return <p>No movies available</p>;
    return (
      <React.Fragment>
        <p>Showing {this.state.movies.length} movies that are available.</p>
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={this.state.genres}
              onSelectGenre={this.handleSelectGenre}
              selectedGenre={this.state.currentGenre}
            />
          </div>
          <div className="col">
            <MoviesTable
              movies={paginatedMovies}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
          </div>
        </div>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          totalItems={filteredMovies.length}
          handlePageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </React.Fragment>
    );
  }

  handleSelectGenre = (genre) => {
    this.setState({
      currentGenre: genre,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };
}

export default Movies;
