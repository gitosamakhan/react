import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Counter from "./components/Counter";

// cant generate unique id when adding a new counter

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  render() {
    const counterOrMessage =
      this.state.counters.length !== 0 ? (
        this.state.counters?.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDeleteCounter}
          />
        ))
      ) : (
        <p>There are no counters to display, Add a counter to display one :)</p>
      );

    return (
      <div className="container">
        <br />
        <button className="btn-warning btn m-2" onClick={this.handleReset}>
          Reset
        </button>
        <button className="btn btn-primary m-2" onClick={this.handleAddCounter}>
          Add Counter
        </button>
        <hr />
        {counterOrMessage}
      </div>
    );
  }

  handleIncrement = (counter) => {
    let updatedCounters = this.state.counters;
    const indexToUpdate = this.state.counters.indexOf(counter);
    updatedCounters[indexToUpdate].value += 1;
    this.setState({
      counters: updatedCounters,
    });
  };

  handleDecrement = (counter) => {
    let updatedCounters = this.state.counters;
    const indexToUpdate = this.state.counters.indexOf(counter);
    updatedCounters[indexToUpdate].value -= 1;
    this.setState({
      counters: updatedCounters,
    });
  };

  handleReset = () => {
    const updatedCounters = this.state.counters;
    updatedCounters.forEach((c) => (c.value = 0));
    this.setState({
      counters: updatedCounters,
    });
  };

  handleDeleteCounter = (counter) => {
    let updatedCounters = this.state.counters.filter(
      (c) => c.id !== counter.id
    );
    this.setState({
      counters: updatedCounters,
    });
  };

  handleAddCounter = () => {
    const counterId = 0;
    const updatedCounters = this.state.counters;
    updatedCounters.push({
      id: counterId,
      value: 0,
    });
    this.setState({
      counters: updatedCounters,
    });
  };
}

export default App;
