import React from "react";
import { Link } from "react-router-dom";


export default function(props) {
    return(
        <div>
            <h2>Portfolio Detail{props.match.params.slug}</h2>
        </div>
    )
}