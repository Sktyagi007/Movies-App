import axios from "axios";
import { Component } from "react";
import {movies} from "../movieData"


class Banner extends Component {
    constructor(){
        super();
        this.state = {
            movie:""
        }
    }
    async componentDidMount(){
        let res = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=97f63997ed44b3422da2e24d73bf8af6");
        this.setState({
            movie:res.data.results[0]
        })
    }
    render() {
        let backdrop_path = this.state.movie.backdrop_path;
        return (
            <div className="card banner-card">
                <img  src={`https://image.tmdb.org/t/p/original${backdrop_path}`} className="card-img-top banner-img" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title banner-title">{this.state.movie.title}</h5>
                        <p className="card-text banner-text">{this.state.movie.overview}</p>
                    </div>
            </div>
        )
    }
}

export default Banner