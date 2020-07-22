import * as gameConstants from "../constants/gameConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listgame: [],
  taskEditing: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case gameConstants.FETCH_GAME: {
      return {
        ...state,
        listgame: [],
      };
    }
    case gameConstants.FETCH_GAME_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listgame: data,
      };
    }
    case gameConstants.FETCH_GAME_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listgame: [],
      };
    }
    case gameConstants.ADD_GAME: {
      return {
        ...state,
      }
    }
    case gameConstants.ADD_GAME_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới tin tức thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case gameConstants.ADD_GAME_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case gameConstants.DELETE_GAME: {
      return {
        ...state,
      };
    }
    case gameConstants.DELETE_GAME_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa tin tuc thành công');
      console.log(state.listgame.filter(item => item._id !== id))
      return {
        ...state,
        listgame: state.listgame.filter(item => item._id !== id),
      };
    }
    case gameConstants.DELETE_GAME_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case gameConstants.SET_GAME_EDITING: {
      return {
        ...state,
      };
    }
    case gameConstants.SET_GAME_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case gameConstants.UPDATE_GAME: {
      return {
        ...state,
      };
    }
    case gameConstants.UPDATE_GAME_SUCCESS: {
      const { data } = action.payload;
      const { listgame } = state;
      console.log(data._id+"1"+ data.id);
      const index = listgame.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listgame.slice(0, index),
          data,
          ...listgame.slice(index + 1),
        ];
        toastSuccess('Cập nhật công việc thành công');
        return {
          ...state,
          listgame: newList,
        };
      }
      return {
        ...state,
      };
    }
    case gameConstants.UPDATE_GAME_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default gameReducer;