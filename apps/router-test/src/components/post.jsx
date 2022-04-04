import React from "react";
import queryString from "query-string";

const Post = (props) => {
  let queryStringParams = queryString.parse(props.location.search);
  console.log(queryStringParams);
  return (
    <h1>
      Posts from: {props.match.params.year} / {props.match.params.month}
    </h1>
  );
};

export default Post;
