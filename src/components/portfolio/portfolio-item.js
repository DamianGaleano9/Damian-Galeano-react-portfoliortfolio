import React from "react"
import { Link } from "react-router-dom";

export default function(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <h4>{props.url}</h4>
      <Link to={`/portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}