import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryConatiner = () => {
  const movies = useSelector((store) => store?.movies);
  return (
     
    <div className="bg-black">
      <div className="-mt-50 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Discover"} movies={movies.discoverMovies}/>
        <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
        <MovieList title={"All Time Favourites"} movies={movies.allTimeFavMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
      </div>
    </div>
  )
}

export default SecondaryConatiner;
