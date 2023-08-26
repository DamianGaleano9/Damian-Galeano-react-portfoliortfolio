import React, { Component } from "react";
import axios from "axios";


export default class PortfolioForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            category: "",
            position: "",
            url: "",
            thumb_image: "",
            bannner_image: "",
            logo: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name)
        formData.append("portfolio_item[description]", this.state.description)
        formData.append("portfolio_item[category]", this.state.category)
        formData.append("portfolio_item[url]", this.state.url);


        return formData;
    }




    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    handleSubmit(event) {
        this.buildForm();
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>PortfolioForm</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Portfolio Item Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />


                        <input
                            type="text"
                            name="url"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="position"
                            placeholder="Position"
                            value={this.state.position}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />

                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div>
                        <button type="Submit">Save</button>
                    </div>
                </form>
            </div>
        )
    }

}