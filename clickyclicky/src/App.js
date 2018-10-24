import React, { Component } from 'react';
import Characters from "./components/Characters";
import character from "./character.json"
import Wrapper from "./components/Wrapper"
import './App.css';
import NavNav from "./components/navbar/";

let gameScore = 0;

class App extends Component {
  state = {
    character,
    gameScore,
  };

  setClick = id => {
    const character = this.state.character;
    const doubleClick = character.filter(characters => characters.id === id);
    if (doubleClick[0].clicked) {
      gameScore = 0;
      for (let i = 0; i < character.length; i++) {
        character[i].clicked = false;
      }
      this.setState({ gameScore });
      this.setState({ character });
    } else {
      doubleClick[0].clicked = true;
      gameScore++;
    }
    character.sort(function (a, b) { return 0.5 - Math.random() });
    this.setState({ character });
    this.setState({ gameScore });
  };



  render() {
    return (
      <div>
        <Wrapper>
          <NavNav
            gameScore={this.state.gameScore}
          />
          <header className="header">
            <h1>Clicky Game!</h1>
            <h2>Click the click to get a point, hitting the same one will cause you to lose</h2>
          </header>
          {this.state.character.map(characters => (
            <Characters
              setClick={this.setClick}
              id={characters.id}
              key={characters.id}
              image={characters.image}
              name={characters.name}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
