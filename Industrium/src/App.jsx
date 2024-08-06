import { useState } from "react";
import Navbar from "./Navbar/Navbar"
import { Searchbar } from "./SearchBar/Searchbar";
import { SearchResultsList } from "./SearchBar/SearchResultsList";

function App() {

  const [results, setResults] = useState([]);

  return (
    <>
      <Navbar></Navbar>
      <Searchbar setResults={setResults} />
      <SearchResultsList results={results} />
    </>

  );
}

export default App
