import SearchElements from '../components/SearchElements'
import { SearchContextManager } from "@giphy/react-components";

const REACT_APP_GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function SearchExperience({ onGifClick }) {
  return (
    <SearchContextManager apiKey={REACT_APP_GIPHY_API_KEY}>
      <SearchElements onGifClick={onGifClick}/>
    </SearchContextManager>
  )
}

export default SearchExperience;
