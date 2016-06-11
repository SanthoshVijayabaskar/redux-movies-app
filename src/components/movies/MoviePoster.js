import React, { Component } from 'react';
import { Link } from 'react-router';
import MovieBox from '../movies/MovieBox';

export default class MoviePoster extends Component{


	constructor(props){
		super(props);
		//Here is where you initialize state
		   this.state ={
			 movies: [
			 	{key:'1', title: 'Kabali',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
				{key:'2', title: 'Kabali 2',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'},
				{key:'3', title: 'Kabali 3',desc:'Sample Movies',pic:'http://bit.do/movie-pic1'}
				 ]
			 }
			 this.handleBooking = this.handleBooking.bind(this);
			 this.handleReadMore = this.handleReadMore.bind(this);
	}

	handleBooking(e){
		console.log("Booking Received!");
		console.log("Title: "+ e.movieTitle);
	}

	handleReadMore(){
		console.log("Read More...");

	}

	render(){

		var movieItems = this.state.movies.map(function(movie){
			return <MovieBox ItemKey={movie.key} desc={movie.desc} title={movie.title} pic={movie.pic} handleBooking={this.handleBooking} handleReadMore={this.handleReadMore}/>
		}.bind(this));


		return (<div>
					<h2>Now Showing...</h2>
					{movieItems}
			   </div>);
	}
	

}