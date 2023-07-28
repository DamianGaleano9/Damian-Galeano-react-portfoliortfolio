import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            isLoading: false,
            data: [
                { title: "Quip", category: "eCommerce" },
                { title: "Eventbrite", category: "Scheduling" },
                { title: "Ministry Safe", category: "Enterprise" },
                { title: "SwingAway", category: "eCommerce" }
            ]
        };

        this.handlerFilter = this.handlerFilter.bind(this)

    }


    handlerFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"Google.com"} />
        })
    }


    render() {
        return (
            <div>
                <button onClick={() => this.handlerFilter('eCommerce')}>
                    eCommerce
                </button>
                <button onClick={() => this.handlerFilter('Scheduling')}>
                    Scheduling
                </button>
                <button onClick={() => this.handlerFilter('Enterprise')}>
                    Enterprise
                </button>

                <h2>{this.state.pageTitle}</h2>
                {this.PortfolioItems()}

            </div>
        )
    }
}