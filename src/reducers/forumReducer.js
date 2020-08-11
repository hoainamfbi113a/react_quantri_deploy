import * as forumConstants from "../constants/forumConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listforum: [],
  taskEditing: null,
};

const forumReducer = (state = initialState, action) => {
  switch (action.type) {
    case forumConstants.FETCH_FORUM: {
      return {
        ...state,
        listforum: [],
      };
    }
    case forumConstants.FETCH_FORUM_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listforum: data,
      };
    }
    case forumConstants.FETCH_FORUM_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listforum: [],
      };
    }
    case forumConstants.ADD_FORUM: {
      return {
        ...state,
      }
    }
    case forumConstants.ADD_FORUM_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới item forum thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case forumConstants.ADD_FORUM_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case forumConstants.DELETE_FORUM: {
      return {
        ...state,
      };
    }
    case forumConstants.DELETE_FORUM_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa item forum thành công');
      console.log(state.listforum.filter(item => item._id !== id))
      return {
        ...state,
        listforum: state.listforum.filter(item => item._id !== id),
      };
    }
    case forumConstants.DELETE_FORUM_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case forumConstants.SET_FORUM_EDITING: {
      return {
        ...state,
      };
    }
    case forumConstants.SET_FORUM_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case forumConstants.UPDATE_FORUM: {
      return {
        ...state,
      };
    }
    case forumConstants.UPDATE_FORUM_SUCCESS: {
      const { data } = action.payload;
      const { listforum } = state;
      console.log(data._id+"1"+ data.id);
      const index = listforum.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listforum.slice(0, index),
          data,
          ...listforum.slice(index + 1),
        ];
        toastSuccess('Cập nhật item forum thành công');
        return {
          ...state,
          listforum: newList,
        };
      }
      return {
        ...state,
      };
    }
    case forumConstants.UPDATE_FORUM_FAILED: {
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

export default forumReducer;