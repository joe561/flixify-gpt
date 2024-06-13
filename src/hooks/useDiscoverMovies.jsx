import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addDiscoverMovies } from "../utils/moviesSlice";

const useDiscoverMovies = () => {
  //Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getDiscoverMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=hi&page=1&region=IN&sort_by=popularity.desc&with_origin_country=IN",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addDiscoverMovies(json.results));
  };

  useEffect(() => {
    getDiscoverMovies();
  }, []);
};

export default useDiscoverMovies;
