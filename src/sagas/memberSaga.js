import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as memberTypes from '../constants/memberConstant';
import { getList, deletemember, addmember,setmember,updatemember } from "../services/memberApi";
import { fetchListMemberFailed, fetchListMemberSuccess, deleteMemberSuccess,
   deleteMemberFailed,addMemberSuccess,addMemberFailed,
   setMemberEditingSuccess,setMemberEditingFailed,
   updateMemberSuccess,
   updateMemberFailed
  } from "../actions/memberAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* memberSaga() {
    yield all([
        yield fork(watchFetchListmemberAction),
        yield takeLatest(memberTypes.DELETE_MEMBER, deletememberSaga),
        yield takeLatest(memberTypes.ADD_MEMBER, addmemberSaga),
        yield takeLatest(memberTypes.SET_MEMBER_EDITING,setmemberSaga),
        yield takeLatest(memberTypes.UPDATE_MEMBER,updatememberSaga),
    ]);
  }
  function* watchFetchListmemberAction() {
    while (true) {
      const action = yield take(memberTypes.FETCH_MEMBER); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListMemberSuccess(data))
      } else {
          yield put(fetchListMemberFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deletememberSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deletemember, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deleteMemberSuccess(id));
    } else {
      yield put(deleteMemberFailed(data));
    }
    yield put (hideLoading())
  }
  function * addmemberSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add member")
    console.log(data);
    const resp = yield call(addmember,data);
    console.log("add member")
    console.log(data);
    const { dataresp , status} = resp;
    if(status === 201) {
      yield put(addMemberSuccess(data));
    } else {
      yield put(addMemberFailed(data));
    }
  }
  function * setmemberSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setmember,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setMemberEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setMemberEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updatememberSaga({ payload }) {
    // const { title, description, status } = payload;
    // const memberEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updatemember,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updateMemberSuccess(data));
    } else {
      yield put(updateMemberFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  