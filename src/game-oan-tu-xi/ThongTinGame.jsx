import React, { Component } from 'react';
import {connect} from 'react-redux';

class ThongTinGame extends Component {
    render() {
        return (
            <div>
                <div className="display-4 text-warning">
                   <h1>{this.props.ketQua}</h1> 
                </div>
                <div className="display-4 text-success">
                    <h1> Số bàn thắng: <span className="text-warning">{this.props.soBanThang}</span></h1>
                </div>
                <div className="display-4 text-success">
                    <h1>Tổng số bàn chơi: <span className="text-warning">{this.props.soBanChoi}</span></h1>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ketQua: state.GameOanTuXiReducer.ketQua,
        soBanThang: state.GameOanTuXiReducer.soBanThang,
        soBanChoi: state.GameOanTuXiReducer.soBanChoi,
    }
}

export default connect(mapStateToProps)(ThongTinGame)
