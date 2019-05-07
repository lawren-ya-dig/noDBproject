import React, {Component} from 'react';
import './WatchList.css';


class Watchlist extends Component{


    
    render(){
       
        return (
            <li key={this.props.movie.id}>
                {this.props.movie.title}
                <button className="delete_btn"
                    type="button"
                    onClick={() => this.props.delete(this.props.movie.id)}
                    > 
                    Delete
                </button>
            </li>
        );
    }
}
export default Watchlist;