import React, { Component } from 'react';

class Garage extends Component {
  render() {
    console.log(this.props)
    const { cars } = this.props
    //const cars = this.props.cars
    
    const cars_list = cars.map(_car => {
        return (
            
            <li key={_car.id}>
                <header>
                    <h3>Brand: {_car.brand}</h3>
                </header>
                <main>
                    <p>Model: {_car.model}</p>
                    <p>Color: {_car.color}</p>
                    <p>Year: {_car.year}</p>
                </main>
                <footer>
                    <button onClick={() => this.props.deleteCar(_car.id)}>Delete car</button>
                </footer>
            </li>
        ) 
    });

    return (
        <div className="cars">
            <ul >
                { cars_list }
            </ul>
        </div>
        );
  }
}

export default Garage;