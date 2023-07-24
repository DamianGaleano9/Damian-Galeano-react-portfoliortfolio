import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('Portfolio Contaier has Rendered');
        
    }

    PortfolioItems() {
        const data = ["Damian", "Massimo", "Salva", "ana"];

        return data.map(item => {
            return <PortfolioItem title={item} url={"Google.com"}/>
        })
    }



    render() {
        return (
            <div>
                <h2>Portfolio Items Goes Here.......</h2>
                <PortfolioItem />
                {this.PortfolioItems()}
                
            </div>
        )
    }
}