import React, { Component } from "react";
import { Link } from "react-router-dom"


class Blog extends Component {
    constructor() {
        super();


    }

    render() {
        return (
            <div>
                <h2>Damian</h2>
                <div>
                    <Link to="/about-me">Read more About Myself</Link>
                </div>
            </div>
        )
    }

}


export default Blog; 