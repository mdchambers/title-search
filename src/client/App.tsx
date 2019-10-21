import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { ThemeProvider } from "theming";
import { createUseStyles } from "react-jss";
import SearchResults from "./containers/SearchResults/SearchResults";

import { fetchOne, searchDB } from "./helpers/dbase";

const theme = {
  colorPrimary: "#ed474a",
  colorSecondary: "#083d77",
  colorPrimaryLight: "#f1797b"
};

const useStyles = createUseStyles({
  bodyContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    paddingTop: 5,
    backgroundColor: theme.colorPrimaryLight,
    height: "100%"
  }
});

const App = () => {
  const classes = useStyles(theme);
  const [results, setResults] = useState([]);

  const fetchSearchResults = async (searchTerm: string) => {
    console.log(`searching for ${searchTerm}`);
    // const foo = await fetchOne();
    const searchResults = await searchDB(searchTerm);
    // console.log('searched');
    // console.log(searchResults);
    setResults(searchResults);
  };

  const fetchDetailedview = (id: string) => {
    
  };

  // console.log(results);
  return (
    <ThemeProvider theme={theme}>
      <SearchBar searchClick={fetchSearchResults}></SearchBar>
      <div className={classes.bodyContainer}>
        <SearchResults results={results} showDetails={fetchDetailedview} />
      </div>
    </ThemeProvider>
  );
};

export default App;
