import * as examConstants from "../constants/examConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listexam: [],
  taskEditing: null,
};

const examReducer = (state = initialState, action) => {
  switch (action.type) {
    case examConstants.FETCH_EXAM: {
      return {
        ...state,
        listexam: [],
      };
    }
    case examConstants.FETCH_EXAM_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listexam: data,
      };
    }
    case examConstants.FETCH_EXAM_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listexam: [],
      };
    }
    case examConstants.ADD_EXAM: {
      return {
        ...state,
      }
    }
    case examConstants.ADD_EXAM_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới bài kiểm thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case examConstants.ADD_EXAM_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case examConstants.DELETE_EXAM: {
      return {
        ...state,
      };
    }
    case examConstants.DELETE_EXAM_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa bài kiểm tra thành công');
      console.log(state.listexam.filter(item => item._id !== id))
      return {
        ...state,
        listexam: state.listexam.filter(item => item._id !== id),
      };
    }
    case examConstants.DELETE_EXAM_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case examConstants.SET_EXAM_EDITING: {
      return {
        ...state,
      };
    }
    case examConstants.SET_EXAM_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case examConstants.UPDATE_EXAM: {
      return {
        ...state,
      };
    }
    case examConstants.UPDATE_EXAM_SUCCESS: {
      const { data } = action.payload;
      const { listexam } = state;
      console.log(data._id+"1"+ data.id);
      const index = listexam.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listexam.slice(0, index),
          data,
          ...listexam.slice(index + 1),
        ];
        toastSuccess('Cập nhật bài kiểm tra thành công');
        return {
          ...state,
          listexam: newList,
        };
      }
      return {
        ...state,
      };
    }
    case examConstants.UPDATE_EXAM_FAILED: {
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

export default examReducer;