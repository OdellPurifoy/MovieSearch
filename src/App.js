import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {}
    // console.log("This is my initializer")

    // const movies = [
    //   {id: 0, poster_src: "avenge_infinity.jpg", title: "Avengers: Infinity War", overview: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos."},
    //   {id: 1, poster_src: "avenge.jpg", title: "The Avengers", overview: "This is my second overview"}
    // ]
    //
    // var movieRows = []
    // movies.forEach((movie) => {
    //   console.log(movie.title)
    //   const movieRow = <MovieRow movie={movie}/>
    //   movieRows.push(movieRow)
    // })
    //
    // this.state = {rows: movieRows}

    this.performSearch("avengers")
  }

    performSearch(searchTerm){
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=df3d5b9a95500bcab8c291885b160bdc&query=" + searchTerm
      console.log("Perform search using moviedb")
      $.ajax({
        url: urlString,
        success: (searchResults) =>  {
          console.log("Data successfully fetched")
          // console.log(searchResults)
          const results = searchResults.results
          // console.log(results[0])

          var movieRows = []

          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185/" + movie.poster_path
            // console.log(movie.post_path)
            const movieRow = <MovieRow key={movie.id} movie={movie}/>
            movieRows.push(movieRow)
          })

          this.setState({rows: movieRows})
        },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
      })
    }

    searchChangHandler(event) {
      console.log(event.target.value)
      const boundObject = this
      const searchTerm = event.target.value
      boundObject.performSearch(searchTerm)
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

        <input placeholder="Enter a movie" className="inputBar" onChange={this.searchChangHandler.bind(this)}/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
