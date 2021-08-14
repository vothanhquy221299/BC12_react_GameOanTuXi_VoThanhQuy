//import 
import { createStore, combineReducers } from "redux";
import GameOanTuXiReducer from "../store/reducer/GameOanTuXiReducer";


//Khoi tao root reducer
const rootReducer = combineReducers({
    GameOanTuXiReducer,
})

//Khoi tao store
const store = createStore(rootReducer);

export default store;