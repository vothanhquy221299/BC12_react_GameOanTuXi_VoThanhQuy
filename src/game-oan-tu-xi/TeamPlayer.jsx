import React, { Component } from "react";
import { connect } from "react-redux";

class TeamPlayer extends Component {
  render() {
    return (
      <div className="text-center teamPlayer">
        <div className="think">
          <img
            className="mt-3"
            width={100}
            height={100}
            style={{ transform: "rotate(120deg)" }}
            src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 150, heigth: 150 }}
          src="./images/game-oan-tu-xi/player.png"
        />

        <div className="row">
          {this.props.mangDatCuoc.map((item, index) => {
            let border = {};
            if(item.datCuoc){
                border = {border: '3px solid orange'};
            }


            return (
              <div className="col-4">
                <button style={border} className="btnOption">
                  <img
                    width={35}
                    height={35}
                    src={item.hinhAnh}
                  />
                </button>
              </div>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    mangDatCuoc: state.GameOanTuXiReducer.mangDatCuoc,
});

export default connect(mapStateToProps)(TeamPlayer);
