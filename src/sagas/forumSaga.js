import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as forumTypes from '../constants/forumConstant';
import { getList, deleteforum, addforum,setforum,updateforum } from "../services/forumApi";
import { fetchListforumFailed, fetchListforumSuccess, deleteforumSuccess,
   deleteforumFailed,addforumSuccess,addforumFailed,
   setforumEditingSuccess,setforumEditingFailed,
   updateforumSuccess,
   updateforumFailed
  } from "../actions/forumAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* forumSaga() {
    yield all([
        yield fork(watchFetchListforumAction),
        yield takeLatest(forumTypes.DELETE_FORUM, deleteforumSaga),
        yield takeLatest(forumTypes.ADD_FORUM, addforumSaga),
        yield takeLatest(forumTypes.SET_FORUM_EDITING,setforumSaga),
        yield takeLatest(forumTypes.UPDATE_FORUM,updateforumSaga),
    ]);
  }
  function* watchFetchListforumAction() {
    while (true) {
      const action = yield take(forumTypes.FETCH_FORUM); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListforumSuccess(data))
      } else {
          yield put(fetchListforumFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deleteforumSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deleteforum, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deleteforumSuccess(id));
    } else {
      yield put(deleteforumFailed(data));
    }
    yield put (hideLoading())
  }
  function * addforumSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addforum,data);
    console.log("add class2")
   
    const { dataresp , status} = resp;
    console.log(status);
    if(status === 200) {
      yield put(addforumSuccess(data));
    } else {
      yield put(addforumFailed(data));
    }
  }
  function * setforumSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setforum,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setforumEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setforumEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updateforumSaga({ payload }) {
    // const { title, description, status } = payload;
    // const forumEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updateforum,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updateforumSuccess(data));
    } else {
      yield put(updateforumFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  