import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { withRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {
    const handleSingOut = () => {
        axios.delete("https://api.devcamp.space/logout", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }

                return response.data
            }).catch(error => {
                console.log("Error Singing out", error)
            })
    }



    const dynamyc = (route, linkText) => {
        return (
            <div className="nav-link-wrapper">
                <div className="nav-link-wrapper">
                    <NavLink to={route} activeClassName="nav-link-active">
                        {linkText}
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

                <div className="nav-link-wrapper">

                    <NavLink to="/blog" activeClassName="nav-link-active">
                        blog
                    </NavLink>
                </div>


                {props.loggedInStatus === "LOGGED_IN" ? dynamyc("/portfolio-manager", "Portfolio Manager") : null}


            </div>
            <div className="right-side">
                Damian Mazo Galeano
                {props.loggedInStatus === 'LOGGED_IN' ? (<a onClick={handleSingOut}> <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /></a>) : null}
               
            </div>
        </div>
    );
};


export default withRouter(NavigationComponent);