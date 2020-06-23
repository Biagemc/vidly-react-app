import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} /> },
    {
      key: "delete",
      content: (movie) => (
        <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger btn-sm">
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColmun, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader sortColmun={sortColmun} onSort={onSort} columns={this.columns} />
        <TableBody columns={this.columns} data={movies} />
      </table>
    );
  }
}

export default MoviesTable;