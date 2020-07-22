import { call, takeLatest, all, put, select,fork,delay,take } from 'redux-saga/effects';
import * as gameTypes from '../constants/gameConstant';
import { getList, deletegame, addgame,setgame,updategame } from "../services/gameApi";
import { fetchListgameFailed, fetchListgameSuccess, deletegameSuccess,
   deletegameFailed,addgameSuccess,addgameFailed,
   setgameEditingSuccess,setgameEditingFailed,
   updategameSuccess,
   updategameFailed
  } from "../actions/gameAction";
import { showLoading, hideLoading } from "../actions/ui";
export default function* gameSaga() {
    yield all([
        yield fork(watchFetchListgameAction),
        yield takeLatest(gameTypes.DELETE_GAME, deletegameSaga),
        yield takeLatest(gameTypes.ADD_GAME, addgameSaga),
        yield takeLatest(gameTypes.SET_GAME_EDITING,setgameSaga),
        yield takeLatest(gameTypes.UPDATE_GAME,updategameSaga),
    ]);
  }
  function* watchFetchListgameAction() {
    while (true) {
      const action = yield take(gameTypes.FETCH_GAME); // Khi FETCH_TASK được dispatch => code từ đây trở xuống sẽ chạy
      const { params } = action.payload;
      yield put(showLoading())
      const resp = yield call(getList,params);
      console.log(resp.data);
      const {status, data} = resp;
      if (status === 200) {
          yield put(fetchListgameSuccess(data))
      } else {
          yield put(fetchListgameFailed)
      }
      yield delay(100)
      yield put(hideLoading())
    }
  }
  function * deletegameSaga({payload}) {
    const { id } = payload;
    yield put(showLoading())
    // alert(console.log("aaa"));
    const resp = yield call(deletegame, id);
    console.log(resp);
    // console.log("delete class");

    const {data, status} = resp;
    if(status === 200) {
      yield put(deletegameSuccess(id));
    } else {
      yield put(deletegameFailed(data));
    }
    yield put (hideLoading())
  }
  function * addgameSaga ({payload}){
    const {data} = payload;
    yield put(showLoading());
    console.log("add class1")
    console.log(data);
    const resp = yield call(addgame,data);
    console.log("add class2")
   
    const { dataresp , status} = resp;
    console.log(status);
    if(status === 200) {
      yield put(addgameSuccess(data));
    } else {
      yield put(addgameFailed(data));
    }
  }
  function * setgameSaga ({payload}){
    const {data} = payload;
    // alert(data)
    yield put(showLoading());
    const resp = yield call(setgame,data);
    if(resp.status) {
      // console.log("aaaa");
      yield put (setgameEditingSuccess(resp.data));
      // console.log("bbbb");
    } else {
      yield put (setgameEditingFailed(resp.data));
    }
    yield delay(500)
      yield put(hideLoading())
  }
  function* updategameSaga({ payload }) {
    // const { title, description, status } = payload;
    // const gameEditing = yield select(state => state.task.taskEditing);
    yield put(showLoading());
    // console.log(payload.data);
    const resp = yield call(
      updategame,payload.data
    );
    // console.log("aaaa");
    // console.log(resp);
    const { data, status: statusCode } = resp;
    if (statusCode === 200) {
      yield put(updategameSuccess(data));
    } else {
      yield put(updategameFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
  