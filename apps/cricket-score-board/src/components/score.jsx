import React from "react";

const Score = (props) => {
  const { score, wickets } = props;
  return (
    <h1>
      {score} - {wickets}
    </h1>
  );
};

export default Score;
