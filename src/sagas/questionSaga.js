import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as questionTypes from '../constants/questionConstant';
import { getList, deletequestion, addquestion,setquestion,updatequestion } from "../services/questionApi";
import { fetchListquestionFailed, fetchListquestionSuccess, deletequestionSuccess,
   deletequestionFailed,addquestionSuccess,addquestionFailed,
   setquestionEditingSuccess,setquestionEditingFailed,
   updatequestionSuccess,
   updatequestionFailed
  } from "../actions/questionAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* questionSaga() {
    yield all([
        yield fork(watchFetchListquestionAction),
        yield takeLatest(questionTypes.DELETE_QUESTION, deletequestionSaga),
        yield takeLatest(questionTypes.ADD_QUESTION, addquestionSaga),
        yield takeLatest(questionTypes.SET_QUESTION_EDITING,setquestionSaga),
        yield takeLatest(questionTypes.UPDATE_QUESTION,updatequestionSaga),
    ]);
  }
  function* watchFetchListquestionAction() {
    while (true) {
      // console.log("aaa");
      const action = yield take(questionTypes.FETCH_QUESTION); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      // console.log("bbb");
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListquestionSuccess(data))
      } else {
          yield put(fetchListquestionFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deletequestionSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deletequestion, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deletequestionSuccess(id));
    } else {
      yield put(deletequestionFailed(data));
    }
    yield put (hideLoading())
  }
  function * addquestionSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addquestion,data);
    console.log("add class2")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 201) {
      yield put(addquestionSuccess(data));
    } else {
      yield put(addquestionFailed(data));
    }
  }
  function * setquestionSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setquestion,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setquestionEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setquestionEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updatequestionSaga({ payload }) {
    // const { title, description, status } = payload;
    // const questionEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updatequestion,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updatequestionSuccess(data));
    } else {
      yield put(updatequestionFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  