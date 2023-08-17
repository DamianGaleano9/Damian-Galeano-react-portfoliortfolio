import React, { Component } from "react"

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <form>
                    <input type="text" />

                </form>
                <form>
                    <input type="password" />

                </form>
            </div>
        )
    }



}