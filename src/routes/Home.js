import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,  // initially app is loading
    movies: []
  };

  // get movie 
  getMovies = async () => {
    // axios is requesting data
    const {data: {data: {movies}}} = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // get data from axios and save to state as movies
    this.setState({movies, isLoading: false}); // after getting data, close loading
  };

  componentDidMount() {
    this.getMovies(); // get movie data when app is ready
  }

  render() {
    const { isLoading, movies } = this.state;   // isLoading, movies from the state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
