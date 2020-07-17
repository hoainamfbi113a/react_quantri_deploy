import * as videoLearningConstants from '../constants/videoLearningConstant';
export const fetchListvideoLearning = (params = {}) => {
  return {
    type: videoLearningConstants.FETCH_VIDEO_LEARNING,
    payload: {
      params,
    },
  };
};

export const fetchListvideoLearningSuccess = data => {
  return {
    type: videoLearningConstants.FETCH_VIDEO_LEARNING_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListvideoLearningFailed = error => {
  return {
    type: videoLearningConstants.FETCH_VIDEO_LEARNING_FAILED,
    payload: {
      error,
    },
  };
};

export const deletevideoLearning = (id) =>{
  return {
    type: videoLearningConstants.DELETE_VIDEO_LEARNING,
    payload: {
      id,
    }
  }
}
export const deletevideoLearningSuccess = (data) =>{
  return {
    type: videoLearningConstants.DELETE_VIDEO_LEARNING_SUCCESS,
    payload: {
      data
    }
  }
}
export const deletevideoLearningFailed = () => {
  return {
    type: videoLearningConstants.DELETE_VIDEO_LEARNING_FAILED
  }
}
export const addvideoLearning = (data) =>{
  return {
    type:videoLearningConstants.ADD_VIDEO_LEARNING,
    payload:{
      data
    }
  }
}
export const addvideoLearningSuccess = (data) =>{
  return {
    type:videoLearningConstants.ADD_VIDEO_LEARNING_SUCCESS,
    payload:{
      data
    }
  }
}
export const addvideoLearningFailed = (error) =>{
  return {
    type:videoLearningConstants.ADD_VIDEO_LEARNING_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setvideoLearningEditing = (data) =>{
  // alert(data);
  return {
    type:videoLearningConstants.SET_VIDEO_LEARNING_EDITING,
    payload: {
      data
    }
  }
}
export const setvideoLearningEditingSuccess = (data) =>{
  return {
    type:videoLearningConstants.SET_VIDEO_LEARNING_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setvideoLearningEditingFailed = (data) =>{
  return {
    type:videoLearningConstants.SET_VIDEO_LEARNING_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updatevideoLearning = (data) => {
  return {
    type: videoLearningConstants.UPDATE_VIDEO_LEARNING,
    payload: {
      data
    },
  };
};

export const updatevideoLearningSuccess = data => {
  return {
    type: videoLearningConstants.UPDATE_VIDEO_LEARNING_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updatevideoLearningFailed = error => {
  return {
    type: videoLearningConstants.UPDATE_VIDEO_LEARNING_FAILED,
    payload: {
      error,
    },
  };
};