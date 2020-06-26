import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import Like from "./common/like";

class MoviesTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      // content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>,
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />,
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader sortColumn={sortColumn} onSort={onSort} columns={this.columns} />
        <TableBody columns={this.columns} data={movies} />
      </table>
    );
  }
}

export default MoviesTable;
