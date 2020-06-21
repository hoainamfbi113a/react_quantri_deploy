import * as actionTypes from "../constants/task";
import {fork,take,takeLatest,put,call,delay} from "redux-saga/effects";
import { hideLoading, showLoading } from '../actions/ui';
import * as taskTypes from './../constants/member';
import {getList } from './../apis/member';
function* watchFetchListTaskAction() {
  while (true) {
    // console.log("Xin chao ban")
    const action = yield take(taskTypes.FETCH_MEMBER); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
    yield put(showLoading());
    const { params } = action.payload;
    const resp = yield call(getList, params);
    // const { status, data } = resp;

    yield delay(1000);
    yield put(hideLoading());
  }
}
// function* filterTaskSaga() {
//     alert("xin chao")
//       const action = yield take(taskTypes.FETCH_TASK); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
//       yield put(showLoading());
//     //   const { params } = action.payload;
//       //const resp = yield call(getList, params);
//      // const { status, data } = resp;
//       yield delay(1000);
//       yield put(hideLoading());
//   }
function* rootSaga(){
    // alert("xin chao saga");
    // yield takeLatest(actionTypes.FETCH_TASK, filterTaskSaga);
    // yield fork(watchFetchListTaskAction);
    yield put(showLoading());
    yield delay(1000);
    yield put(hideLoading());
}
export default rootSaga;