import * as GameOanTuXiConstant from '../constants/GameOanTuXiConstant';
const initialState ={
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './images/game-oan-tu-xi/keo.png', datCuoc: false},
        {ma: 'bua', hinhAnh: './images/game-oan-tu-xi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './images/game-oan-tu-xi/bao.png', datCuoc: false},
    ],
    ketQua: "I'm iron man, I love you 3000!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {}

}

const GameOanTuXiReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
     
        default:
            return {...state};
    }
}

export default GameOanTuXiReducer;
