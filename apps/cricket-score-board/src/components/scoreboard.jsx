import React, { Component } from "react";
import Controller from "./controller";
import Score from "./score";

class ScoreBoard extends Component {
  state = {
    score: 0,
    over: 0,
    ball: 0,
    wickets: 0,
  };

  handleScoreIncrement = (score) => {
    let scoreToIncrement = score === -1 ? 1 : score;
    this.setState({
      score: (this.state.score += scoreToIncrement),
    });
  };

  render() {
    const { score, wickets, over, ball } = this.state;
    return (
      <div className="container">
        <h1>
          <Score score={score} wickets={wickets} />
        </h1>
        <hr />
        <Controller scoreIncrement={this.handleScoreIncrement} />
      </div>
    );
  }
}

export default ScoreBoard;
