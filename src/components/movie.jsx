import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movie extends Component {
  state = {
    movie: getMovies(),
  };
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-4">
            <h5>{this.state.movie.title}</h5>
          </div>
          <div className="col-2">
            <h5>{this.state.movie.genre}</h5>
          </div>
          <div className="col-2">
            <h5>{this.state.movie.numberInStock}</h5>
          </div>

          <div className="col-2">
            <h5>{this.state.movie.dailyRentalRate}</h5>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default Movie;
