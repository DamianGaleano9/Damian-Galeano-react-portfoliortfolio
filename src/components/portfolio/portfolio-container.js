import React, { Component } from "react";
import axios from 'axios';


import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: []
        };

        this.handlerFilter = this.handlerFilter.bind(this);
        // this.getPortfolioItems = this.PortfolioItems.bind(this);

    }


    handlerFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get("https://damiangaleano.devcamp.space/portfolio/portfolio_items")
            .then(response => {
                // handle success
                console.log("Response data", response);
                this.setState({
                    data: response.data.portfolio_items
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            });

    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem
                key={item.id} item={item} />
        })
    }

    componentDidMount() {
        { this.getPortfolioItems() }

    }


    render() {
        if (this.state.isLoading) {
            return <div>Is loading</div>
        }



        return (

                <div className="portfolio-items-wrapper">
                    <button className="btn" onClick={() => this.handlerFilter('eCommerce')}>
                        eCommerce
                    </button>
                    <button className="btn" onClick={() => this.handlerFilter('Scheduling')}>
                        Scheduling
                    </button>
                    <button className="btn" onClick={() => this.handlerFilter('Enterprise')}>
                        Enterprise
                    </button>
                    {this.PortfolioItems()};
                </div>


        )
    }
}