import React from 'react'

class MovieRow extends React.Component {
  render() {
    return <table key={this.props.movie.id} className="movieTable">
      <tbody>
        <tr>
          <td>
            <img width="100" alt="movie-poster" src={this.props.movie.poster_src}/>
          </td>
          <td>
            {this.props.movie.title}
            <p>{this.props.movie.overview}</p>
          </td>
        </tr>
      </tbody>
    </table>
  }
}

export default MovieRow
