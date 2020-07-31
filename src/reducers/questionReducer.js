import * as questionConstants from "../constants/questionConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listquestion: [],
  taskEditing: null,
};

const questionReducer = (state = initialState, action) => {
  switch (action.type) {
    case questionConstants.FETCH_QUESTION: {
      return {
        ...state,
        listquestion: [],
      };
    }
    case questionConstants.FETCH_QUESTION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listquestion: data,
      };
    }
    case questionConstants.FETCH_QUESTION_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listquestion: [],
      };
    }
    case questionConstants.ADD_QUESTION: {
      return {
        ...state,
      }
    }
    case questionConstants.ADD_QUESTION_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới câu hỏi thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case questionConstants.ADD_QUESTION_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case questionConstants.DELETE_QUESTION: {
      return {
        ...state,
      };
    }
    case questionConstants.DELETE_QUESTION_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa câu hỏi thành công');
      console.log(state.listquestion.filter(item => item._id !== id))
      return {
        ...state,
        listquestion: state.listquestion.filter(item => item._id !== id),
      };
    }
    case questionConstants.DELETE_QUESTION_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case questionConstants.SET_QUESTION_EDITING: {
      return {
        ...state,
      };
    }
    case questionConstants.SET_QUESTION_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case questionConstants.UPDATE_QUESTION: {
      return {
        ...state,
      };
    }
    case questionConstants.UPDATE_QUESTION_SUCCESS: {
      const { data } = action.payload;
      const { listquestion } = state;
      console.log(data._id+"1"+ data.id);
      const index = listquestion.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listquestion.slice(0, index),
          data,
          ...listquestion.slice(index + 1),
        ];
        toastSuccess('Cập nhật câu hỏi thành công');
        return {
          ...state,
          listquestion: newList,
        };
      }
      return {
        ...state,
      };
    }
    case questionConstants.UPDATE_QUESTION_FAILED: {
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

export default questionReducer;