// import {fork,take,takeLatest,put,call,delay,select} from "redux-saga/effects";
// import * as newTypes from '../constants/newsConstant';
// import { getList, deleteNew, addNew,setNew,updateNew } from "../services/newsApi";
// import { fetchListNewsFailed, fetchListNewsSuccess, deleteNewSuccess,
//    deleteNewFailed,addNewSuccess,addNewFailed,
//    setNewEditingSuccess,setNewEditingFailed,
//    updateNewSuccess,
//    updateNewFailed
//   } from "../actions/newsAction";
// import { showLoading, hideLoading } from "../actions/ui";
// function* watchFetchListNewsAction() {
//   while (true) {
//     const action = yield take(newTypes.FETCH_NEW); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
//     const { params } = action.payload;
//     yield put(showLoading())
//     const resp = yield call(getList,params);
//     const {status, data} = resp;
//     if (status === 200) {
//         yield put(fetchListNewsSuccess(data))
//     } else {
//         yield put(fetchListNewsFailed)
//     }
//     yield delay(100)
//     yield put(hideLoading())
//   }
// }
// function * deleteNewSaga({payload}) {
//   const { id } = payload;
//   yield put(showLoading())
//   // alert(console.log("aaa"));
//   const resp = yield call(deleteNew, id);
//   const {data, status} = resp;
//   if(status === 200) {
//     yield put(deleteNewSuccess(id));
//   } else {
//     yield put(deleteNewFailed(data));
//   }
//   yield put (hideLoading())
// }
// function * addNewSaga ({payload}){
//   const {data} = payload;
//   yield put(showLoading());
//   const resp = yield call(addNew,data);
//   const { dataresp , status} = resp;
//   if(status === 201) {
//     yield put(addNewSuccess(data));
//   } else {
//     yield put(addNewFailed(data));
//   }
// }
// function * setNewSaga ({payload}){
//   const {data} = payload;
//   // alert(data)
//   yield put(showLoading());
//   const resp = yield call(setNew,data);
//   if(resp.status) {
//     // console.log("aaaa");
//     yield put (setNewEditingSuccess(resp.data));
//     // console.log("bbbb");
//   } else {
//     yield put (setNewEditingFailed(resp.data));
//   }
//   yield delay(500)
//     yield put(hideLoading())
// }
// function* updateNewSga({ payload }) {
//   // const { title, description, status } = payload;
//   // const newEditing = yield select(state => state.task.taskEditing);
//   yield put(showLoading());
//   const resp = yield call(
//     updateNew,payload.data
//   );
//   const { data, status: statusCode } = resp;
//   if (statusCode === 200) {
//     yield put(updateNewSuccess(data));
//   } else {
//     yield put(updateNewFailed(data));
//   }
//   yield delay(1000);
//   yield put(hideLoading());
// }

// function* rootSaga () {
//     yield fork(watchFetchListNewsAction);
//     yield takeLatest(newTypes.DELETE_NEW, deleteNewSaga);
//     yield takeLatest(newTypes.ADD_NEW, addNewSaga);
//     yield takeLatest(newTypes.SET_NEW_EDITING,setNewSaga);
//     yield takeLatest(newTypes.UPDATE_NEW,updateNewSga);
// }
// export default rootSaga;
import {all} from "redux-saga/effects";
import newSaga from "./newSaga"
import videoLearningSaga from "./videoLearningSaga"


function* rootSaga () {
  yield all([
    // some sagas only receive an action
    newSaga(),
    videoLearningSaga(),
  ]);
}
export default rootSaga;