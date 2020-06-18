import React, { Component } from "react";
import { deleteMovie } from "../services/fakeMovieService";
import { getMovies } from "../services/fakeMovieService";
import { getMovie } from "../services/fakeMovieService";
import { saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Movie from "./movie";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((mov) => mov._id !== movie._id);
    this.setState({ movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) {
      return <p>There are no movies in the Database.</p>;
    }
    return (
      <React.Fragment>
        <p>Showing {count} in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <th> {movie.genre.name}</th>
                <th> {movie.numberInStock}</th>
                <th>{movie.dailyRentalRate}</th>
                <th>
                  <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Movies;
