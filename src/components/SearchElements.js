import React, { useState, useContext } from "react";
import {
  Grid, // our UI Component to display the results
  SearchBar, // the search bar the user will type into
  SearchContext, // the context that wraps and connects our components
  SuggestionBar, // an optional UI component that displays trending searches and channel / username results
} from "@giphy/react-components";
import ResizeObserver from "react-resize-observer";

// define the components in a separate function so we can
// use the context hook. You could also use the render props pattern
function SearchElements({ onGifClick }) {
  const { fetchGifs, searchKey } = useContext(SearchContext);
  const [width, setWidth] = useState(window.innerWidth);
  return (
      <>
          <SearchBar />
          <div style={{margin: '0.5em 0'}}>
            <SuggestionBar />
          </div>
          {/**
              key will recreate the component,
              this is important for when you change fetchGifs
              e.g. changing from search term dogs to cats or type gifs to stickers
              you want to restart the gifs from the beginning and changing a component's key does that
          **/}
          <Grid
            onGifClick={onGifClick}
            key={searchKey}
            columns={3}
            gutter={6}
            width={width}
            fetchGifs={fetchGifs} />
          <ResizeObserver
            onResize={({ width }) => {
              setWidth(width);
            }}
          />
      </>
  )
}

export default SearchElements;
