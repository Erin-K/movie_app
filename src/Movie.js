import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';
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

function Movie ({title, poster, genres, synopsis}) { //functional code
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre,index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <div className="Movie__Synopsis">
          <LineEllipsis
            text={synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            baseOn='letters'
          />
        </div>
      </div>
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

function MoviePoster({poster, alt}) { // willmount, didmount 등 필요없음 그럴때 만드는 것. render도 없고 라이프사이클도 없음. state도 없고. html을 리턴할뿐. 즉 상태변화(state)가 필요없는 컴포넌트는 functional code가 훨씬 코드가 간결함.
  return (
    <img src={poster} alt={alt} className="Movie__Poster" />
  )
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre} </span>
  )
}

MoviePoster.propTypes = { // functional 코드의 propTypes audtl
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;