import * as GameOanTuXiConstant from '../constants/GameOanTuXiConstant';

export const actChonKeoBuaBao = keoBuaBao =>({
    type: GameOanTuXiConstant.CHON_KEO_BUA_BAO,
    payload: keoBuaBao,
});

export const actDatCuoc = () =>({
    type: GameOanTuXiConstant.DAT_CUOC,
})
