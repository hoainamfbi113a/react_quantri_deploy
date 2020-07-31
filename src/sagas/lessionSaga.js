import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as lessionTypes from '../constants/lessionConstant';
import { getList, deletelession, addlession,setlession,updatelession } from "../services/lessionApi";
import { fetchListlessionFailed, fetchListlessionSuccess, deletelessionSuccess,
   deletelessionFailed,addlessionSuccess,addlessionFailed,
   setlessionEditingSuccess,setlessionEditingFailed,
   updatelessionSuccess,
   updatelessionFailed
  } from "../actions/lessionAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* lessionSaga() {
    yield all([
        yield fork(watchFetchListlessionAction),
        yield takeLatest(lessionTypes.DELETE_LESSION, deletelessionSaga),
        yield takeLatest(lessionTypes.ADD_LESSION, addlessionSaga),
        yield takeLatest(lessionTypes.SET_LESSION_EDITING,setlessionSaga),
        yield takeLatest(lessionTypes.UPDATE_LESSION,updatelessionSaga),
    ]);
  }
  function* watchFetchListlessionAction() {
    while (true) {
      // console.log("aaa");
      const action = yield take(lessionTypes.FETCH_LESSION); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      // console.log("bbb");
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListlessionSuccess(data))
      } else {
          yield put(fetchListlessionFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deletelessionSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deletelession, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deletelessionSuccess(id));
    } else {
      yield put(deletelessionFailed(data));
    }
    yield put (hideLoading())
  }
  function * addlessionSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addlession,data);
    console.log("add class2")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 200) {
      yield put(addlessionSuccess(data));
    } else {
      yield put(addlessionFailed(data));
    }
  }
  function * setlessionSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setlession,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setlessionEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setlessionEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updatelessionSaga({ payload }) {
    // const { title, description, status } = payload;
    // const lessionEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updatelession,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updatelessionSuccess(data));
    } else {
      yield put(updatelessionFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  