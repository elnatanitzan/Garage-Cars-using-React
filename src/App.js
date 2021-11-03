import React, { Component } from 'react';
import Garage from './components/Garage'
import AddCar from './components/AddCar.js';
import { connect } from 'react-redux';
import { delete_car_action } from './reducers/actions/delete_car';
import { add_car_action } from './reducers/actions/add_car';
import './App.scss';
class App extends Component {
  
  addCar = (new_car) => {
    this.props.add_car(new_car);
  }

  deleteCar = (_id) => {
    this.props.delete_car(_id);
  }
  
  render() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Garage</h1>
      </header>
      <div className="main">
        <AddCar addCar = {this.addCar} />
        <Garage cars={this.props.my_cars} deleteCar={this.deleteCar} />
      </div>
    </div>
    );
  }
}

const ReducerToProps = (store_state, ownProps) => {
  return {
    ...ownProps,
    my_cars: store_state.my_cars
  };
}

const dispatchToProps = (dispach) => {
  return {
    delete_car: id => dispach(delete_car_action(id)),
    add_car: new_car => dispach(add_car_action(new_car))
  }
}
export default connect(ReducerToProps, dispatchToProps)(App);
