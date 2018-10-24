import React from "react";
import "./Characters.css";

const Characters = props => (
  <div className="card">

    <span className="cardClick"
      onClick={() => props.setClick(props.id)}>
      click
    </span>

    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default Characters;
