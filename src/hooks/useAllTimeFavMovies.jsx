import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addAllTimeFavMovies } from "../utils/moviesSlice";

const useAllTimeFavMovies = () => {
  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getAllTimeFavMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&region=IN&sort_by=vote_count.desc&with_origin_country=IN&with_original_language=te",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addAllTimeFavMovies(json.results));
  };

  useEffect(() => {
    getAllTimeFavMovies();
  }, []);
};

export default useAllTimeFavMovies;
