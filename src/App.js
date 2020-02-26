import React, {Component} from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // react running order
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update: componentWillRecieveProps -> shouldComponentUpdate() == true -> componentWillUpdate() // 로딩중 -> render() -> componentDidUpdate() //로딩끝, 업데이트 완료

  state = {}

  // componentWillMount(){ 
    // console.log('1');
    // fetch('https://yts.mx/api/v2/list_movies.json?quality=3D?sort_by=rating') //ajax==fetch (latest js), log result: promise
    // .then(res => res.json())
    // .then(json => 
    //   this.setState({
    //     movies: json.data.movies
    //   })
    // )
    // .catch(err => console.log(err))
  // };
  
  componentDidMount() {
    this._getMovies();
    // console.log('3');
  };

  _renderMovies = () => {
    console.log( this.state.movies  )
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
    })

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies)
    this.setState({
      movies // == movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.mx/api/v2/list_movies.json?quality=3D?sort_by=download_count') //ajax==fetch (latest js), log result: promise
    .then(res => res.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    // console.log('2');
    console.log(this.state.movies)
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        { movies ? this._renderMovies() : 'Loading' }
      </div>
    );
  } 
}

export default App;
