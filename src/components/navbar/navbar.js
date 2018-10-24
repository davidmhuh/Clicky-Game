import React from "react";
import "./navbar.css";

const navbar = props => (
    <nav className="navbar navbar-default navbar-fixed top">
    <ul>
      <li className="game">Click Click</li>
      <li className="click">Click Image to Start</li>
      <li className="scoreboard">Score: {props.gameScore}</li>
    </ul>
    </nav>
)

export default navbar;