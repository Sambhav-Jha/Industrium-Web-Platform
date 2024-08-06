import React from "react";
import "../SearchBar/SearchResult.css"

export const SearchResult = ({result}) => {
    return <div className="search-result" onClick={(e) => alert('You clicked on ${result.name}')}>{result.name}</div>;
}