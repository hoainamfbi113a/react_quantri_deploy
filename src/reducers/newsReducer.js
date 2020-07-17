import * as newsConstants from "../constants/newsConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listNews: [],
  taskEditing: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case newsConstants.FETCH_NEW: {
      return {
        ...state,
        listNews: [],
      };
    }
    case newsConstants.FETCH_NEW_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listNews: data,
      };
    }
    case newsConstants.FETCH_NEW_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listNews: [],
      };
    }
    case newsConstants.ADD_NEW: {
      return {
        ...state,
      }
    }
    case newsConstants.ADD_NEW_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới tin tức thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case newsConstants.ADD_NEW_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case newsConstants.DELETE_NEW: {
      return {
        ...state,
      };
    }
    case newsConstants.DELETE_NEW_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa tin tuc thành công');
      console.log(state.listNews.filter(item => item._id !== id))
      return {
        ...state,
        listNews: state.listNews.filter(item => item._id !== id),
      };
    }
    case newsConstants.DELETE_NEW_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case newsConstants.SET_NEW_EDITING: {
      return {
        ...state,
      };
    }
    case newsConstants.SET_NEW_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case newsConstants.UPDATE_NEW: {
      return {
        ...state,
      };
    }
    case newsConstants.UPDATE_NEW_SUCCESS: {
      const { data } = action.payload;
      const { listNews } = state;
      console.log(data._id+"1"+ data.id);
      const index = listNews.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listNews.slice(0, index),
          data,
          ...listNews.slice(index + 1),
        ];
        toastSuccess('Cập nhật công việc thành công');
        return {
          ...state,
          listNews: newList,
        };
      }
      return {
        ...state,
      };
    }
    case newsConstants.UPDATE_NEW_FAILED: {
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

export default newsReducer;