import { Component } from 'react';
import './App.scss';
import Car from './components/Car';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>Hello!</p>
        </header>
         
         {/* this Here we create props and store data within it: */}
        <Car brand="Toyota" model="Corola" color="Black" />
        <hr/>

        <Car brand="Isuzu" model="Lime" color="Grey"/>
        <hr/>

        <Car brand="Mazda" model="Lantis" color="Yellow" />
        <hr/>
      </div>
    );
  }
}

export default App;
