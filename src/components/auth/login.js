import React, { Component } from "react"

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        console.log("handle Submit", this.state.email, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Your Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <div>
                        <button type="subtmit">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}