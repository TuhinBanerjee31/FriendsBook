import React from "react";
import Cards from './Cards';

// FUNCTION TO EXTRACT INFORMATION FROM API/LIST INTO THE CARDS

const CardsInfo = ({list}) => {
    return(
        <div>
            {
        list.map((user, i) => {
            return(
            <Cards
         key= {list[i].id}
         id={list[i].id} 
         name={list[i].name} 
         email={list[i].email}
         />
            );
    })
}
        </div>
    );
}

export default CardsInfo;