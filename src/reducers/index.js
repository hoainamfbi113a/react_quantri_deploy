import {combineReducers} from "redux";
import uiReducer from "./ui"
import newReducer from "./newsReducer";
import videoLearningReducer from "./videoLearningReducer";
import classSubjectReducer from "./classSubjectReducer";
import memberReducer from "./memberReducer";
import questionReducer from "./questionReducer";
const rootReducer = combineReducers({
    ui:uiReducer,
    newReducer:newReducer,
    videoLearningReducer:videoLearningReducer,
    classSubjectReducer:classSubjectReducer,
    memberReducer:memberReducer,
    questionReducer:questionReducer,
})
export default rootReducer;