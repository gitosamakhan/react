import React, { Component } from "react";

class MoviesTable extends Component {
  render() {
    const { movies, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th onClick={() => this.updateSortColumn("title")}>Title</th>
            <th onClick={() => this.updateSortColumn("genre.name")}>Genre</th>
            <th onClick={() => this.updateSortColumn("numberInStock")}>
              Stock
            </th>
            <th onClick={() => this.updateSortColumn("dailyRentalRate")}>
              Rate
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  updateSortColumn = (columnName) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === columnName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = columnName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
}

export default MoviesTable;
