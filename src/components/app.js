import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import axios from 'axios';

import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from './pages/blog-detail';
import PortfolioManager from './pages/portfolio-manager';

import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'

import { faTrash, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";


library.add(faTrash, faSignOutAlt, fas)

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);

  };


  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }


  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }


  checkLoginStatus() {
    return axios.get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    }).then(response => {
      const loggedIn = response.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus

      // If loggedIn and status LOGGED_IN => return data
      // If loggedIn status NOT_LOGGED_IN => update state
      // If not loggedIn and status LOGGED_IN => update stated


      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })

          .catch((err) => {
            console.log('error', err);
          })
      }
    })
  }



  componentDidMount() {
    this.checkLoginStatus()
  }



  authorizedPages() {
    return [
      <Route key={PortfolioManager} path="/portfolio-manager" component={PortfolioManager} />

    ]
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer
              loggedInStatus={this.state.loggedInStatus}
              handleSuccessfulLogout={this.handleSuccessfulLogout}


            />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route path="/auth"

                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handlerUnsuccessfulLogin={this.handlerUnsuccessfulLogin}

                  />
                )}
              />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/b/:slug" component={BlogDetail} />

              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />

            </Switch>

          </div>
        </Router>


      </div>
    );
  }
}
