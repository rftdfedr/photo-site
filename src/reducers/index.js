import { combineReducers } from "redux";
import photoReducer from "./photo-reducer";


const rootReducer = combineReducers({
    photoReducer: photoReducer
})

export default rootReducer;