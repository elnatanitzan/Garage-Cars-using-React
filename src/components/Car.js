import React, { Component } from 'react'

export class Car extends Component {
    render() {

        // "this.props" refers to the data of props we sent within the Car Tag in App.js
        const { brand, model, color } = this.props ;

        return (
            <div>
                {/* Here we place the values of the props we sent inside the Car tag in App.js */}
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Color: {color}</p>
            </div>
        )
    }
}

export default Car;
