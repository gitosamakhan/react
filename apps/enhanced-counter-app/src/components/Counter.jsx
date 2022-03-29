import React, { Component } from "react";

const Counter = (props) => {
  const { onIncrement, onDecrement, onDelete, counter } = props;
  const { value } = props.counter;
  const count = value > 0 ? value : "Zero";
  const disableDecrement = value > 0 ? false : true;
  return (
    <div className="row">
      <div className="col-1">
        <span className="badge badge-warning m-2" style={{ fontSize: 22 }}>
          {count}
        </span>
      </div>
      <div className="col">
        <button
          className="btn btn-info m-2"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onDecrement(counter)}
          disabled={disableDecrement}
        >
          -
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default Counter;
