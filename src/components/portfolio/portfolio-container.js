import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my Portfolio",
            data: [{ title: "Damian" },
            {title: "Massimo"},
            {title: "Salva"},
            {title: "ana"}]
        }

        this.handlePageUpdateTitle = this.handlePageUpdateTitle.bind(this)

    }

    PortfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"Google.com"} />
        })
    }

    handlePageUpdateTitle() {
        this.setState({
            pageTitle: "New Title"
        })
    }


    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                {this.PortfolioItems()}

                <button onClick={this.handlePageUpdateTitle}>Change the Title</button>
            </div>
        )
    }
}