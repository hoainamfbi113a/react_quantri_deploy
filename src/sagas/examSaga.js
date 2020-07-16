import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as examTypes from '../constants/examConstant';
import { getList, deleteexam, addexam,setexam,updateexam } from "../services/examApi";
import { fetchListexamFailed, fetchListexamSuccess, deleteexamSuccess,
   deleteexamFailed,addexamSuccess,addexamFailed,
   setexamEditingSuccess,setexamEditingFailed,
   updateexamSuccess,
   updateexamFailed
  } from "../actions/examAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* examSaga() {
    yield all([
        yield fork(watchFetchListexamAction),
        yield takeLatest(examTypes.DELETE_EXAM, deleteexamSaga),
        yield takeLatest(examTypes.ADD_EXAM, addexamSaga),
        yield takeLatest(examTypes.SET_EXAM_EDITING,setexamSaga),
        yield takeLatest(examTypes.UPDATE_EXAM,updateexamSaga),
    ]);
  }
  function* watchFetchListexamAction() {
    while (true) {
      // console.log("aaa");
      const action = yield take(examTypes.FETCH_EXAM); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      // console.log("bbb");
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListexamSuccess(data))
      } else {
          yield put(fetchListexamFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deleteexamSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deleteexam, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deleteexamSuccess(id));
    } else {
      yield put(deleteexamFailed(data));
    }
    yield put (hideLoading())
  }
  function * addexamSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addexam,data);
    console.log("add class2")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 201) {
      yield put(addexamSuccess(data));
    } else {
      yield put(addexamFailed(data));
    }
  }
  function * setexamSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setexam,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setexamEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setexamEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updateexamSaga({ payload }) {
    // const { title, description, status } = payload;
    // const examEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updateexam,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updateexamSuccess(data));
    } else {
      yield put(updateexamFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  