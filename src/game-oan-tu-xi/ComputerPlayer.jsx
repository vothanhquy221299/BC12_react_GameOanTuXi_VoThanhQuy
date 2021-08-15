import { map } from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";

class ComputerPlayer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now} {
      from {top: 0px;}
      to {top: 200px;}
    }`;

    return (
      <div className="text-center teamPlayer">
        <style>{keyframe}</style>
        <div className="think" >
          <img
            style={{
              animation: `randomItem${Date.now} 0.5s`,
              transform: "rotate(120deg)",
            }}
            className="mt-3"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
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
const mapStateToProps = (state) => {
  return {
    computer: state.GameOanTuXiReducer.computer,
  };
};

export default connect(mapStateToProps)(ComputerPlayer);
