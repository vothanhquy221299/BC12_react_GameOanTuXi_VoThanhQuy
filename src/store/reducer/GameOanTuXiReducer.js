// import * as GameOanTuXiConstant from '../constants/GameOanTuXiConstant';
const initialState ={
    mangDatCuoc: [
        {ma: 'keo', hinhAnh: './images/game-oan-tu-xi/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './images/game-oan-tu-xi/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './images/game-oan-tu-xi/bao.png', datCuoc: false},
    ],
    ketQua: "I'm iron man, I love you 3000!!!",
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'bao', hinhAnh: './images/game-oan-tu-xi/bao.png'}

}

const GameOanTuXiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case 'CHON_KEO_BUA_BAO':{
            let mangDatCuocUpdate = [...state.mangDatCuoc];
            mangDatCuocUpdate = mangDatCuocUpdate.map((item, index)=>{
                if(item.ma === action.maCuoc){
                    return {...item, datCuoc: true }
                }
                return {...item, datCuoc: false }
            })
            state.mangDatCuoc = mangDatCuocUpdate;
            console.log(action);
            return {...state}
        }
        case 'RAN_DOM':{
            let randomNumber = Math.floor(Math.random() * 3);
            let quanCuocNgauNhien = state.mangDatCuoc[randomNumber];
            state.computer = quanCuocNgauNhien;
            return {...state}
        }

        case 'END_GAME':{
           
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;

            switch (player.ma) {
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketQua = 'Hòa nhau !!!';
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Bạn thua rồi!!!'
                    } else{
                        state.soBanThang +=1;
                        state.ketQua = "I'm iron man, I love you 3000!!!"
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm iron man, I love you 3000!!!";
                    }else if(computer.ma === 'bua'){
                        state.ketQua = 'Hòa nhau !!!'
                    } else{
                        state.ketQua = "Bạn thua rồi!!!"
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketQua = "Bạn thua rồi!!!";
                    }else if(computer.ma === 'bua'){
                        state.soBanThang +=1;
                        state.ketQua = "I'm iron man, I love you 3000!!!"
                    } else{
                        state.ketQua = "Hòa nhau!!!"
                    }
                    break;
            
                default : 
                state.soBanThang +=1;
                state.ketQua = "I'm iron man, I love you 3000!!!";
                    return {...state}
            }
        } 
        state.soBanChoi += 1;
        default:
            return {...state};
    }
}

export default GameOanTuXiReducer;
