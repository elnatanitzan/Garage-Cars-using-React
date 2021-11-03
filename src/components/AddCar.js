import React, { Component } from 'react';

class AddCar extends Component {
    state = {
        fake_property: 3,
        new_car: {
            brand: null, 
            color: null, 
            year: null,
            model: null }
    }
    handleChange = (e) => {
        const really_new_car = {...this.state.new_car}
        really_new_car[e.target.id] = e.target.value
        this.setState({
            new_car: really_new_car})
        console.log(this.state.new_car)
        console.log(e.target.id)
        console.log(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCar(this.state.new_car)
        e.target.reset();
    }
    render() {   
        return (
            <div className="add-car">
                <h3>Add new Car:</h3>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-container">
                        <div>
                            <input type="text" id="brand" onChange={this.handleChange} required placeholder="Brand:"/>
                            <label htmlFor="brand"></label>
                        </div>

                        <div>
                            <input type="text" id="model" onChange={this.handleChange} placeholder="Model:"/>
                            <label htmlFor="Model"></label>
                        </div>

                        <div>
                            <input type="text" id="color" onChange={this.handleChange} placeholder="Color:"/>
                            <label htmlFor="Color"></label>
                        </div>

                        <div>
                            <input type="number" id="year" onChange={this.handleChange} placeholder="Year:"/>
                            <label htmlFor="Year"></label>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
            );
    }
}

export default AddCar;