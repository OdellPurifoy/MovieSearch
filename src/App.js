import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, poster_src: "avenge_infinity.jpg", title: "Avengers: Infinity War", overview: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos."},
      {id: 1, poster_src: "avenge.jpg", title: "The Avengers", overview: "This is my second overview"}
    ]

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <table key={movie.id} className="movieTable">
        <tbody>
          <tr>
            <td>
              <img width="100" alt="movie-poster" src={movie.poster_src}/>
            </td>
            <td>
              {movie.title}
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>
      movieRows.push(movieRow)
    })

    this.state = {rows: movieRows}
  }

  render() {
    return (
      <div className="App">

        <table className="titleBar">
          <tbody>
            <tr>
              <td><img alt="app-icon" width="60" src="pop_corn.png"/></td>
              <td width='8'></td>
              <td><h1>MoviesDB Search</h1></td>
            </tr>
          </tbody>
        </table>

        <input placeholder="Enter a movie" className="inputBar"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
