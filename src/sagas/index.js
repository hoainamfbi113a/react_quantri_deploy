import {all} from "redux-saga/effects";
import newSaga from "./newSaga"
import videoLearningSaga from "./videoLearningSaga"
import classSubjectSaga from "./classSubjectSaga"
import memberSaga from "./memberSaga"
import questionSaga from "./questionSaga"
import examSaga from "./examSaga"
import gameSaga from "./gameSaga"
import lessionSaga from "./lessionSaga"


function* rootSaga () {
  yield all([
    // some sagas only receive an action
    newSaga(),
    classSubjectSaga(),
    memberSaga(),
    questionSaga(),
    gameSaga(),
    examSaga(),
    videoLearningSaga(),
    lessionSaga(),
  ]);
}
export default rootSaga;