import React from 'react';
import InstantSearchProvider from './SearchProvider';
import SearchResults from './SearchResults';
import SearchOptions from './SearchOptions';
import { SavedTalksMapType, OnVideoSaveType } from './App';
import { Box, H1 } from './design';
import AlgoliaLogo from './AlgoliaLogo';
import { CONTENT_MAX_WIDTH } from './theme';

function Home(props: {
  onVideoSave: OnVideoSaveType;
  path: string;
  savedTalks: SavedTalksMapType;
}) {
  return (
    <Box px={[0, 4]} mx="auto" maxWidth={CONTENT_MAX_WIDTH}>
      <H1
        px={[2, 0]}
        pt={3}
        pb={0}
        m={0}
        fontWeight={900}
        color="almostWhite"
        fontSize={3}
      >
        Conference talks about web development
      </H1>
      <Box px={[2, 0]} pb={3}>
        <a
          href="https://www.algolia.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Learn more about Algolia"
        >
          <AlgoliaLogo />
        </a>
      </Box>
      <InstantSearchProvider>
        <SearchOptions />
        <SearchResults
          onVideoSave={props.onVideoSave}
          savedTalks={props.savedTalks}
        />
      </InstantSearchProvider>
    </Box>
  );
}

export default Home;
