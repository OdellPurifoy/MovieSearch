import React, { Component } from 'react';
import './App.css';

class App extends Component {
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

      </div>
    );
  }
}

export default App;
