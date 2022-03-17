import React from "react";

// INTERACTIVE SEARCH BOX

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa3">
            <input className="bg-lightest-blue b--dark-blue pa2 br4"
             type="search"
              placeholder="Search Here"
              onChange={searchChange}></input>
        </div>
    );
} 

export default SearchBox;