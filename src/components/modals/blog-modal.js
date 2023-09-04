import React, { Component } from "react";
import Reactmodal from "react-modal";



export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        
    }


    render() {
        return (
            <div>
                <Reactmodal isOpen={this.state.modalIsOpen}>
                    <h1>I'm an a Modal</h1>

                </Reactmodal>
            </div>
        )
    }
}