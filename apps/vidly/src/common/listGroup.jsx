import React from "react";
import propTypes from "prop-types";

const ListGroup = (props) => {
  const { genres, onSelectGenre, selectedGenre } = props;
  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          onClick={() => onSelectGenre(g)}
          key={g._id}
          className={
            selectedGenre.name === g.name
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

ListGroup.propTypes = {
  genres: propTypes.array.isRequired,
  onSelectGenre: propTypes.func.isRequired,
  selectedGenre: propTypes.object.isRequired,
};

// ListGroup.defaultProps = {
//   valueProperty: "_id",
//   textProperty: "name",
// };

export default ListGroup;
