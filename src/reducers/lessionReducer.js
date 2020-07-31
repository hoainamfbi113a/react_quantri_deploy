import * as lessionConstants from "../constants/lessionConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listlession: [],
  taskEditing: null,
};

const lessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case lessionConstants.FETCH_LESSION: {
      return {
        ...state,
        listlession: [],
      };
    }
    case lessionConstants.FETCH_LESSION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listlession: data,
      };
    }
    case lessionConstants.FETCH_LESSION_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listlession: [],
      };
    }
    case lessionConstants.ADD_LESSION: {
      return {
        ...state,
      }
    }
    case lessionConstants.ADD_LESSION_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới bài học thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case lessionConstants.ADD_LESSION_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case lessionConstants.DELETE_LESSION: {
      return {
        ...state,
      };
    }
    case lessionConstants.DELETE_LESSION_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa bài học thành công');
      console.log(state.listlession.filter(item => item._id !== id))
      return {
        ...state,
        listlession: state.listlession.filter(item => item._id !== id),
      };
    }
    case lessionConstants.DELETE_LESSION_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case lessionConstants.SET_LESSION_EDITING: {
      return {
        ...state,
      };
    }
    case lessionConstants.SET_LESSION_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case lessionConstants.UPDATE_LESSION: {
      return {
        ...state,
      };
    }
    case lessionConstants.UPDATE_LESSION_SUCCESS: {
      const { data } = action.payload;
      const { listlession } = state;
      console.log(data._id+"1"+ data.id);
      const index = listlession.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listlession.slice(0, index),
          data,
          ...listlession.slice(index + 1),
        ];
        toastSuccess('Cập nhật bài học thành công');
        return {
          ...state,
          listlession: newList,
        };
      }
      return {
        ...state,
      };
    }
    case lessionConstants.UPDATE_LESSION_FAILED: {
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

export default lessionReducer;