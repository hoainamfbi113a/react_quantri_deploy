import * as memberConstants from "../constants/memberConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listmember: [],
  taskEditing: null,
};

const memberReducer = (state = initialState, action) => {
  switch (action.type) {
    case memberConstants.FETCH_MEMBER: {
      return {
        ...state,
        listmember: [],
      };
    }
    case memberConstants.FETCH_MEMBER_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listmember: data,
      };
    }
    case memberConstants.FETCH_MEMBER_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listmember: [],
      };
    }
    case memberConstants.ADD_MEMBER: {
      return {
        ...state,
      }
    }
    case memberConstants.ADD_MEMBER_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới tin tức thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case memberConstants.ADD_MEMBER_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case memberConstants.DELETE_MEMBER: {
      return {
        ...state,
      };
    }
    case memberConstants.DELETE_MEMBER_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa tin tuc thành công');
      console.log(state.listmember.filter(item => item._id !== id))
      return {
        ...state,
        listmember: state.listmember.filter(item => item._id !== id),
      };
    }
    case memberConstants.DELETE_MEMBER_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case memberConstants.SET_MEMBER_EDITING: {
      return {
        ...state,
      };
    }
    case memberConstants.SET_MEMBER_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case memberConstants.UPDATE_MEMBER: {
      return {
        ...state,
      };
    }
    case memberConstants.UPDATE_MEMBER_SUCCESS: {
      const { data } = action.payload;
      const { listmember } = state;
      console.log(data._id+"1"+ data.id);
      const index = listmember.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listmember.slice(0, index),
          data,
          ...listmember.slice(index + 1),
        ];
        toastSuccess('Cập nhật công việc thành công');
        return {
          ...state,
          listmember: newList,
        };
      }
      return {
        ...state,
      };
    }
    case memberConstants.UPDATE_MEMBER_FAILED: {
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

export default memberReducer;