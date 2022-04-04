import React from "react";

const Product = (props) => {
  return <h1>Product - {props.match.params.id} </h1>;
};

export default Product;
