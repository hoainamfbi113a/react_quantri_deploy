import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as classSubjectTypes from '../constants/classSubjectConstant';
import { getList, deleteclassSubject, addclassSubject,setclassSubject,updateclassSubject } from "../services/classSubjectApi";
import { fetchListclassSubjectFailed, fetchListclassSubjectSuccess, deleteclassSubjectSuccess,
   deleteclassSubjectFailed,addclassSubjectSuccess,addclassSubjectFailed,
   setclassSubjectEditingSuccess,setclassSubjectEditingFailed,
   updateclassSubjectSuccess,
   updateclassSubjectFailed
  } from "../actions/classSubjectAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* classSubjectSaga() {
    yield all([
        yield fork(watchFetchListclassSubjectAction),
        yield takeLatest(classSubjectTypes.DELETE_CLASS_SUBJECT, deleteclassSubjectSaga),
        yield takeLatest(classSubjectTypes.ADD_CLASS_SUBJECT, addclassSubjectSaga),
        yield takeLatest(classSubjectTypes.SET_CLASS_SUBJECT_EDITING,setclassSubjectSaga),
        yield takeLatest(classSubjectTypes.UPDATE_CLASS_SUBJECT,updateclassSubjectSaga),
    ]);
  }
  function* watchFetchListclassSubjectAction() {
    while (true) {
      const action = yield take(classSubjectTypes.FETCH_CLASS_SUBJECT); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListclassSubjectSuccess(data))
      } else {
          yield put(fetchListclassSubjectFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deleteclassSubjectSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deleteclassSubject, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deleteclassSubjectSuccess(id));
    } else {
      yield put(deleteclassSubjectFailed(data));
    }
    yield put (hideLoading())
  }
  function * addclassSubjectSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addclassSubject,data);
    console.log("add class2")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 201) {
      yield put(addclassSubjectSuccess(data));
    } else {
      yield put(addclassSubjectFailed(data));
    }
  }
  function * setclassSubjectSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setclassSubject,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setclassSubjectEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setclassSubjectEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updateclassSubjectSaga({ payload }) {
    // const { title, description, status } = payload;
    // const classSubjectEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updateclassSubject,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updateclassSubjectSuccess(data));
    } else {
      yield put(updateclassSubjectFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  