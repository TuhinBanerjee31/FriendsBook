import React from "react";

// STRUCTURING THE CARDS

const Cards = (props) => {
    // const { name, email, id } = props;  (DESTRUCTURING METHOD)
    return(
        <div className="tc bg-light-blue dib br3 pa4 ma2 grow bw2 shadow-5">
            <img alt="userpic" src={`https://robohash.org/${props.id}?size=200x200`}></img>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Cards;