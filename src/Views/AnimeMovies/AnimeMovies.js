import React, {Component} from 'react';
import './AnimeMovies.css';



class AnimeMovies extends Component {
   
        render(){
            
            return (
            
                    <li key={this.props.movie.id}>
                    {this.props.movie.title}
                    <button className="add_btn"
                        type="button"
                        onClick={() => this.props.addToWatchList(this.props.movie)}
                        >
                        Add
                    </button>
                    <button className="info_btn"
                        type="button"
                        onClick={() => this.props.supplyInfo(this.props.movie)}
                        >
                        info
                    </button>
                    </li>
                )
            
        }
}

export default AnimeMovies;