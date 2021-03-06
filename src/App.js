import React, { Component } from 'react';
import Garage from './components/Garage'
import AddCar from './components/AddCar.js';
import './App.scss'
;
class App extends Component {
  static my_car_seq = 10;
  state = {
    my_cars: [
      {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 1}, 
      {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 2}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 3},
      {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 4}, 
      {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 5}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 6},
      {brand: "Honda", model: "Civic", color: "Black", year: 2018, id: 7}, 
      {brand: "Toyota", model: "Kamry", color: "White", year: 2019, id: 8}, 
      {brand: "Ferrari", model: "Testa rocca", color: "Red", year: 2020, id: 9} 
    ]
  }
  addCar = (new_car) => {
    const new_arr = [...this.state.my_cars]
    new_arr.push({...new_car, id: App.my_car_seq++})
    this.setState(
        {
            my_cars: new_arr
        }
    )
  }

  deleteCar = (_id) => {
    const new_cars = this.state.my_cars.filter(car => car.id !== _id);
    this.setState({
      my_cars: new_cars,
    })
  }
  
  render() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Garage</h1>
      </header>
      <div className="main">
        <AddCar addCar = {this.addCar} />
        <Garage cars={this.state.my_cars} deleteCar={this.deleteCar} />
      </div>
    </div>
    );
  }
}

export default App;
