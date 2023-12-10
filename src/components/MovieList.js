import React from 'react';


const MovieList = (props) => {
	console.log('test')
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container'>
					<a href="/Detail">

						<img src={movie.Poster} alt='movie'></img>
						<p >{movie.Title}</p>
					</a>
						<a  href={`https://www.imdb.com/title/${movie.imdbID}/`} target="_blank">Trailer</a>

					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
