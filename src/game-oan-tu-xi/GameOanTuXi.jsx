import React, { Component } from 'react';
import ComputerPlayer from './ComputerPlayer';
import './GameOanTuXi.css'
import TeamPlayer from './TeamPlayer';
import ThongTinGame from './ThongTinGame';
import {connect} from 'react-redux';

class GameOanTuXi extends Component {
    render() {
        return (
            <div className="game-container">
                <div className="row">
                    <div className="col-4 mt-4">
                        <TeamPlayer/>
                    </div>
                    <div className="col-4 mt-3">
                        <ThongTinGame/>
                        <button className="mt-5 btn btn-success">Play Game</button>
                    </div>
                    <div className="col-4 mt-4">
                        <ComputerPlayer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(GameOanTuXi)