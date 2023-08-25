import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
    constructor() {
        super();



        this.state = {
            portfolioItems: []
        }


        this.handleSuccessfulFormSubmision = this.handleSuccessfulFormSubmision.bind(this);
        this.handleFormSubmisionError = this.handleFormSubmisionError.bind(this);
    }

    handleSuccessfulFormSubmision(portfolioItem) {
        // TODO
        // update the portfolioItems state
        // and add the portfolioItem to the list
    }


    handleFormSubmisionError(error) {
        console.log("handleFormSubmisionError", error)
    }


    getPortfolioItems() {
        axios.get("https://jordan.devcamp.space/portfolio/portfolio_items", { withCredentials: true })
            .then(response => {
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                });
            }).catch(error => {
                console.log("Error in get portfolio", error);
            });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">

                <div className="left-column">

                    <PortfolioForm
                        handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}

                    />
                </div>


                <div className="right-column">
                    <PortfolioSideBarList data={this.state.portfolioItems} />
                </div>
            </div>
        )
    }

}