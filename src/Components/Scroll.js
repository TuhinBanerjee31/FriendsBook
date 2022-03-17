import React from "react";

// FUNCTION FOR ADDING SCROLL BAR

const Scroll =(props) => {
    return (
        <div style={{overflowY: 'scroll', border:'2px solid black', height:'800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;