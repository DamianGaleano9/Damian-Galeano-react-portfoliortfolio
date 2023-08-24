import React, { Component } from "react";
import axios from "axios";

export default class PortfolioManager extends Component {
    constructor(){
        super()

        this.state={
            portfolioItem: []
        }
    }

    getPortfolioItems(){
        axios.get("https://jordan.devcamp.space/portfolio/portfolio_items", {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItem: [... response.data.portfolioItem]
            })
        }).catch(error => {
            console.log("Error in get portfolio", error);
        });
    }




    componentDidMount(){
        this.getPortfolioItems();
    }
    render() {
        return (
            <div className="portfolio-manager-wrapper">

                <div className="left-column">
                    <h1>PortfolioManager</h1>
                </div>


                <div className="right-column">
                    <h1>PortfolioManager</h1>
                </div>
            </div>
        )
    }

}