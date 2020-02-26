import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// class Movie extends Component {
  
//   static propTypes = {
//     title: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

function Movie ({title, poster}) { //functional code
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
}

// class MoviePoster extends Component {

//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <img src={this.props.poster} />
//     )
//   }
// }

function MoviePoster({poster}) { // willmount, didmount 등 필요없음 그럴때 만드는 것. render도 없고 라이프사이클도 없음. state도 없고. html을 리턴할뿐. 즉 상태변화(state)가 필요없는 컴포넌트는 functional code가 훨씬 코드가 간결함.
  return (
    <img src={poster} alt={poster} />
  )
}

MoviePoster.propTypes = { // functional 코드의 propTypes audtl
  poster: PropTypes.string.isRequired
}

export default Movie;