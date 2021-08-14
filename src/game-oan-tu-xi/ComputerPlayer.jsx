import React, { Component } from "react";

export default class ComputerPlayer extends Component {
  render() {
    return (
      <div className="text-center teamPlayer">
        <div className="think">
          <img
            className="mt-3"
            width={100}
            height={100}
            style={{transform: 'rotate(120deg)'}}
            src="./images/game-oan-tu-xi/bua.png"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, heigth: 150 }}
          src="./images/game-oan-tu-xi/playerComputer.png"
        />
      </div>
    );
  }
}
