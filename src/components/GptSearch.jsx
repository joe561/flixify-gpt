import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions"
import { BANNER_IMG } from "../utils/constants";

const GptSearch = () => {
return (
    <div>
        <div className="fixed -z-10">
        <img
          src= {BANNER_IMG}
          alt="bg-img"
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
)
};

export default GptSearch;