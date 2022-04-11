import React, { Component } from "react";

class Controller extends Component {
  state = {
    possibleScores: [1, 2, 3, 4, 6, -1],
  };
  render() {
    const { scoreIncrement } = this.props;
    return (
      <div>
        {this.state.possibleScores.map((score) => (
          <button
            className={this.getButtonStyle(score)}
            key={this.state.possibleScores.indexOf(score)}
            onClick={() => scoreIncrement(score)}
          >
            {score === -1 ? "wide" : score}
          </button>
        ))}
      </div>
    );
  }

  handleScore = () => {};

  getButtonStyle = (score) => {
    const defaultStyle = "m-2 btn shadow-none ";
    if (score === -1) {
      return defaultStyle + "btn-info";
    } else if (score === -2) {
      return defaultStyle + "danger";
    } else if (score > 3) {
      return defaultStyle + "btn-outline-success";
    } else {
      return defaultStyle + "btn-outline-primary";
    }
  };
}

export default Controller;
