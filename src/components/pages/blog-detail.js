import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {

    constructor(props) {
        super(props);


        this.state = {
            currentId: this.props.match.params.slug,
        }
    }


    getBlogItem(){
        axios.get(`https://damiangaleano.devcamp.space/portfolio/portfolio_blogs/${this.state
        .currentId}`).
        then(response => {
            console.log('response', response);

        }).catch(error =>{
                console.log('Errorr', error);
            })
    }


    componentDidMount(){
        this.getBlogItem();
    }
    

    render() {
        console.log('Response from', this.state.currentId);

        return (
            <h1>BlogDetail</h1>
        )
    }
}