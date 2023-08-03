import React, { Component } from 'react';
import moment from "moment"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"



import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from "./navigation/navigation-container"


import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-details";
import NoMatch from "./pages/no-match";
import axios from 'axios';




export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this)
  }
  getPortfolioItems(){
    axios.get('https://damiangaleano.devcamp.space/portfolio/portfolio_items')
  .then(response=> {
    // handle success
    console.log("Response data", response);
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  }
  render() {
    this.getPortfolioItems();
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>Damian Mazo Galeano</h1>
            <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio-detail" component={PortfolioDetail} />
              <Route component={NoMatch} />


            </Switch>

          </div>
        </Router>


      </div>
    );
  }
}
