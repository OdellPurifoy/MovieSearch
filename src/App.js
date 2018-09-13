import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    console.log("This is my initializer")

    const movies = [
      {id: 0, title: "Avengers: Infinity War", overview: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos."},
      {id: 1, title: "The Avengers", overview: "This is my second overview"}
    ]

    this.state = {rows: [
      <p key='0'>This is a row</p>,
      <p key='1'>This is a row</p>,
      <p key='2'>This is a row</p>
    ]}

    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      movieRows.push(<p key={movie.id}>{movie.title}</p>)
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
