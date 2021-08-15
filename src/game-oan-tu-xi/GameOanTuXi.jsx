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
                        <button onClick={()=>{this.props.playGame()}} className="mt-5 btn btn-success">Play Game</button>
                    </div>
                    <div className="col-4 mt-4">
                        <ComputerPlayer/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        playGame: () =>{
            //
            let count = 0;
            let randomComputerItem = setInterval(()=>{
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if(count >= 10){
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME',
                    })
                }
            }, 100)
        }
    }
}
export default connect(null, mapDispatchToProps)(GameOanTuXi)