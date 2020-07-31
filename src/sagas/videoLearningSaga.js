import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as videoLearningTypes from '../constants/videoLearningConstant';
import { getList, deletevideoLearning, addvideoLearning,setvideoLearning,updatevideoLearning } from "../services/videoLearningApi";
import { fetchListvideoLearningFailed, fetchListvideoLearningSuccess, deletevideoLearningSuccess,
   deletevideoLearningFailed,addvideoLearningSuccess,addvideoLearningFailed,
   setvideoLearningEditingSuccess,setvideoLearningEditingFailed,
   updatevideoLearningSuccess,
   updatevideoLearningFailed
  } from "../actions/videoLearningAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* videoLearningSaga() {
    yield all([
        yield fork(watchFetchListvideoLearningAction),
        yield takeLatest(videoLearningTypes.DELETE_VIDEO_LEARNING, deletevideoLearningSaga),
        yield takeLatest(videoLearningTypes.ADD_VIDEO_LEARNING, addvideoLearningaga),
        yield takeLatest(videoLearningTypes.SET_VIDEO_LEARNING_EDITING,setvideoLearningSaga),
        yield takeLatest(videoLearningTypes.UPDATE_VIDEO_LEARNING,updatevideoLearningSaga),
    ]);
  }
  function* watchFetchListvideoLearningAction() {
    while (true) {
      const action = yield take(videoLearningTypes.FETCH_VIDEO_LEARNING); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListvideoLearningSuccess(data))
      } else {
          yield put(fetchListvideoLearningFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deletevideoLearningSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deletevideoLearning, id);
    console.log(resp);
    // console.log("delete video");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deletevideoLearningSuccess(id));
    } else {
      yield put(deletevideoLearningFailed(data));
    }
    yield put (hideLoading())
  }
  function * addvideoLearningaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add video1")
    console.log(data);
    const resp = yield call(addvideoLearning,data);
    console.log("add video2")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 200) {
      yield put(addvideoLearningSuccess(data));
    } else {
      yield put(addvideoLearningFailed(data));
    }
  }
  function * setvideoLearningSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setvideoLearning,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setvideoLearningEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setvideoLearningEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updatevideoLearningSaga({ payload }) {
    // const { title, description, status } = payload;
    // const videoLearningEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updatevideoLearning,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updatevideoLearningSuccess(data));
    } else {
      yield put(updatevideoLearningFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  