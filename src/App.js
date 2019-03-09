import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  componentWillMount() {
    console.log('will mount');
  }

  state = {

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
          },
          {
            title: "Full metal Jacket",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41MN0ANVJTL._SY445_.jpg"
          },
          {
            title: "Oldboy",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXepaTQOs33GBlFS1Lu0Y6ifwsINileFw1TxhC62NId7VsRmxg"
          },
          {
            title: "Star Wars",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoBq5af1KcwELZNebyBPZR0Vbywc71omi5oe7NqsoPv3J2cDFGAw"
          }
        ]
      });
    }, 5000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render() {
    console.log('render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
