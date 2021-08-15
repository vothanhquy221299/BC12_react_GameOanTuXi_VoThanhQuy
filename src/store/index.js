//import 
import { createStore, combineReducers } from "redux";
import GameOanTuXiReducer from "../store/reducer/GameOanTuXiReducer";


//Khoi tao root reducer
const rootReducer = combineReducers({
    GameOanTuXiReducer,
})

//Khoi tao store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;