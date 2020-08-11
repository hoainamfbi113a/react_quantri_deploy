import {combineReducers} from "redux";
import uiReducer from "./ui"
import newReducer from "./newsReducer";
import videoLearningReducer from "./videoLearningReducer";
import classSubjectReducer from "./classSubjectReducer";
import memberReducer from "./memberReducer";
import questionReducer from "./questionReducer";
import examReducer from "./examReducer";
import gameReducer from "./gameReducer";
import lessionReducer from "./lessionReducer";
import forumReducer from "./forumReducer";
const rootReducer = combineReducers({
    ui:uiReducer,
    newReducer:newReducer,
    videoLearningReducer:videoLearningReducer,
    classSubjectReducer:classSubjectReducer,
    memberReducer:memberReducer,
    questionReducer:questionReducer,
    examReducer:examReducer,
    gameReducer:gameReducer,
    lessionReducer:lessionReducer,
    forumReducer:forumReducer,
})
export default rootReducer;