import React, { Component } from 'react'

export default class ThongTinGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">
                   <h1>Bạn thua</h1> 
                </div>
                <div className="display-4 text-success">
                    <h1> Số bàn thắng: <span className="text-warning">0</span></h1>
                </div>
                <div className="display-4 text-success">
                    <h1>Tổng số bàn chơi: <span className="text-warning">0</span></h1>
                </div>
            </div>
        )
    }
}
