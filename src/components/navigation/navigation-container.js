import React from "react";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
    const dynamyc = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink to="/blog" activeClassName="nav-link-active">
                        Blog
                    </NavLink>

                </div>
            </div>
        )
    }
    return (

        <div className="nav-wrapper">
            <div className="left-side">

                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>


                <div className="nav-link-wrapper">

                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>


                {props.loggedInStatus === "LOGGED_IN" ? dynamyc("/blog", "Blog"): null}


            </div>
            <div className="right-side">
                Damian Mazo Galeano
            </div>
        </div>
    );

}


export default NavigationComponent;