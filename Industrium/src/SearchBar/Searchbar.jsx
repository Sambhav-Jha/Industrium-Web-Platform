import React from "react";
import { FaSearch } from "react-icons/fa";
import "../SearchBar/Searchbar.css"


export const Searchbar = () => {
    return <div className="input-wrapper">
        <input placeholder="Search..."/>
        <FaSearch id="search-icon" />
    </div>
}
