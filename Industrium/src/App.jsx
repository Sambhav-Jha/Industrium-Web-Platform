import { useState } from "react";
import Navbar from "./Navbar/Navbar"
import About from "./AboutUs/About"
import Portals from "./Portals/Portals"
import WhyIndustrium from "./WhyIndustrium/WhyIndustrium"
import IndustrySegments from "./IndustrySegments/IndustrySegments"
import { Route, Routes } from "react-router-dom"
import { Searchbar } from "./SearchBar/Searchbar";
import { SearchResultsList } from "./SearchBar/SearchResultsList";

function App() {

  const [results, setResults] = useState([]);

  return (
    <>
      <Navbar />
        <div className="container">
          <Routes>
            <Route path="/wi" element={<WhyIndustrium/>}/>
            <Route path="/is" element={<IndustrySegments/>}/>
            <Route path="/portals" element={<Portals/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      <Searchbar setResults={setResults} />
      <SearchResultsList results={results} />
    </>

  );
}

export default App
