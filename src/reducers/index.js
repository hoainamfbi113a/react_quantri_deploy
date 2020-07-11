import {combineReducers} from "redux";
import uiReducer from "./ui"
import newReducer from "./newsReducer";
import videoLearningReducer from "./videoLearningReducer";
import classSubjectReducer from "./classSubjectReducer";
const rootReducer = combineReducers({
    ui:uiReducer,
    newReducer:newReducer,
    videoLearningReducer:videoLearningReducer,
    classSubjectReducer:classSubjectReducer
})
export default rootReducer;