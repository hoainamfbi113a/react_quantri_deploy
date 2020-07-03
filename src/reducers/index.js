import {combineReducers} from "redux";
import uiReducer from "./ui"
import newReducer from "./newsReducer"
const rootReducer = combineReducers({
    ui:uiReducer,
    newReducer:newReducer
})
export default rootReducer;