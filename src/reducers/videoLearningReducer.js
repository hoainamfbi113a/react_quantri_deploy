import * as videoLearningConstants from "../constants/videoLearningConstant";
import { toastError, toastSuccess } from '../helpers/toastHelper';

const initialState = {
  listvideoLearning: [],
  taskEditing: null,
};

const videoLearningReducer = (state = initialState, action) => {
  switch (action.type) {
    case videoLearningConstants.FETCH_VIDEO_LEARNING: {
      return {
        ...state,
        listvideoLearning: [],
      };
    }
    case videoLearningConstants.FETCH_VIDEO_LEARNING_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listvideoLearning: data,
      };
    }
    case videoLearningConstants.FETCH_VIDEO_LEARNING_FAILED: {
      const { error } = action.payload;
      // toastError(error);
      return {
        ...state,
        listvideoLearning: [],
      };
    }
    case videoLearningConstants.ADD_VIDEO_LEARNING: {
      return {
        ...state,
      }
    }
    case videoLearningConstants.ADD_VIDEO_LEARNING_SUCCESS:{
      const {data} = action.payload;
      toastSuccess('Thêm mới video bài học thành công');
      setTimeout(()=>{

      },100)
      return {
        ...state,data
      }
    }
    case videoLearningConstants.ADD_VIDEO_LEARNING_FAILED:{
      const {error} = action.payload;
      toastError(error)
      return {
        ...state
      }
    }
    case videoLearningConstants.DELETE_VIDEO_LEARNING: {
      return {
        ...state,
      };
    }
    case videoLearningConstants.DELETE_VIDEO_LEARNING_SUCCESS: {
      const { data: id } = action.payload; // task id
      toastSuccess('Xóa bài học thành công');
      console.log(state.listvideoLearning.filter(item => item._id !== id))
      return {
        ...state,
        listvideoLearning: state.listvideoLearning.filter(item => item._id !== id),
      };
    }
    case videoLearningConstants.DELETE_VIDEO_LEARNING_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    case videoLearningConstants.SET_VIDEO_LEARNING_EDITING: {
      return {
        ...state,
      };
    }
    case videoLearningConstants.SET_VIDEO_LEARNING_EDITING_SUCCESS: {
      return {
        ...state,
      };
    }
    case videoLearningConstants.UPDATE_VIDEO_LEARNING: {
      return {
        ...state,
      };
    }
    case videoLearningConstants.UPDATE_VIDEO_LEARNING_SUCCESS: {
      const { data } = action.payload;
      const { listvideoLearning } = state;
      console.log(data._id+"1"+ data.id);
      const index = listvideoLearning.findIndex(item => item.id === data.id);
      if (index !== -1) {
        const newList = [
          ...listvideoLearning.slice(0, index),
          data,
          ...listvideoLearning.slice(index + 1),
        ];
        toastSuccess('Cập nhật video bài học thành công');
        return {
          ...state,
          listvideoLearning: newList,
        };
      }
      return {
        ...state,
      };
    }
    case videoLearningConstants.UPDATE_VIDEO_LEARNING_FAILED: {
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

export default videoLearningReducer;