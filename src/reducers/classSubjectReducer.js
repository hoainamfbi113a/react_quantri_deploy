import * as classSubjectConstants from "../constants/classSubjectConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listclassSubject: [],
  taskEditing: null,
};

const classSubjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case classSubjectConstants.FETCH_CLASS_SUBJECT: {
      return {
        ...state,
        listclassSubject: [],
      };
    }
    case classSubjectConstants.FETCH_CLASS_SUBJECT_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listclassSubject: data,
      };
    }
    case classSubjectConstants.FETCH_CLASS_SUBJECT_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listclassSubject: [],
      };
    }
    case classSubjectConstants.ADD_CLASS_SUBJECT: {
      return {
        ...state,
      }
    }
    case classSubjectConstants.ADD_CLASS_SUBJECT_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới lớp học thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case classSubjectConstants.ADD_CLASS_SUBJECT_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case classSubjectConstants.DELETE_CLASS_SUBJECT: {
      return {
        ...state,
      };
    }
    case classSubjectConstants.DELETE_CLASS_SUBJECT_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa lớp học thành công');
      console.log(state.listclassSubject.filter(item => item._id !== id))
      return {
        ...state,
        listclassSubject: state.listclassSubject.filter(item => item._id !== id),
      };
    }
    case classSubjectConstants.DELETE_CLASS_SUBJECT_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case classSubjectConstants.SET_CLASS_SUBJECT_EDITING: {
      return {
        ...state,
      };
    }
    case classSubjectConstants.SET_CLASS_SUBJECT_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case classSubjectConstants.UPDATE_CLASS_SUBJECT: {
      return {
        ...state,
      };
    }
    case classSubjectConstants.UPDATE_CLASS_SUBJECT_SUCCESS: {
      const { data } = action.payload;
      const { listclassSubject } = state;
      console.log(data._id+"1"+ data.id);
      const index = listclassSubject.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listclassSubject.slice(0, index),
          data,
          ...listclassSubject.slice(index + 1),
        ];
        toastSuccess('Cập nhật lớp học thành công');
        return {
          ...state,
          listclassSubject: newList,
        };
      }
      return {
        ...state,
      };
    }
    case classSubjectConstants.UPDATE_CLASS_SUBJECT_FAILED: {
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

export default classSubjectReducer;