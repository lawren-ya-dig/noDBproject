import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';


import AnimeMovies from './Views/AnimeMovies/AnimeMovies.js';
import WatchList from './Views/AnimeMovies/Components/WatchList/WatchList';
import Information from './Views/AnimeMovies/Components/Information/Information'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        movies: [],
        watchList: [],
        info: [],
        query: '',
    };

    this.addToWatchList = this.addToWatchList.bind(this);
    this.delete = this.delete.bind(this);
}

    componentDidMount(){
      axios.get(`/api/films`)
          .then((res) =>{
              this.setState({
                  movies: res.data
              });
          });
        }
      addToWatchList(movie) {
          axios.post(`/api/films`, movie)
            .then(res => {
              this.setState({
                watchList: res.data
              });
            });
           }

        delete(movie) {
          axios.delete(`/api/films/${movie}`)
            .then(res =>{
              this.setState({
                watchList: res.data
              });
            });
          }

          supplyInfo(movie){
            axios.post(`/api/films/${movie}`)
              .then(res =>{
                this.setState({
                  info: res.data
                })
              })
          }

  render(){
    const animeMovies = this.state.movies.map((e, i, a)=>{
      return<AnimeMovies key={e.id} addToWatchList={this.addToWatchList} movie={e}/>
    })
    const watchList = this.state.watchList.map((e, i)=>{
      return <WatchList key={i} movie={e} delete={this.delete} /> 
    })
      

    return (
      <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Cormorant+Unicase|Dosis" rel="stylesheet"/>

        <Helmet>
         <title>Studio Ghibli</title>
        </Helmet>
      
       
        <header> 
            Studio Ghibli Movies
        </header>
        
          <div className="animeMovies">
            <h3>List of Movies</h3> 
              <ul>
                {animeMovies}
              </ul>
          </div>
      
          <div className="watchList" style={{
            flexDirection: 'column',
            justifyContent: 'center',
            display: 'flex',
            }}>
            <h3> Watch Next... </h3>
              <ul>
                {watchList}
              </ul>
          </div>
          <div className="information">
              <h3> Information </h3>
            {Information}
          </div>
      </div>
    );
  }
}



export default App;
