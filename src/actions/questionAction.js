import * as questionConstants from '../constants/questionConstant';
export const fetchListquestion = (params = {}) => {
  return {
    type: questionConstants.FETCH_QUESTION,
    payload: {
      params,
    },
  };
};

export const fetchListquestionSuccess = data => {
  return {
    type: questionConstants.FETCH_QUESTION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListquestionFailed = error => {
  return {
    type: questionConstants.FETCH_QUESTION_FAILED,
    payload: {
      error,
    },
  };
};

export const deletequestion = (id) =>{
  return {
    type: questionConstants.DELETE_QUESTION,
    payload: {
      id,
    }
  }
}
export const deletequestionSuccess = (data) =>{
  return {
    type: questionConstants.DELETE_QUESTION_SUCCESS,
    payload: {
      data
    }
  }
}
export const deletequestionFailed = () => {
  return {
    type: questionConstants.DELETE_QUESTION_FAILED
  }
}
export const addquestion = (data) =>{
  return {
    type:questionConstants.ADD_QUESTION,
    payload:{
      data
    }
  }
}
export const addquestionSuccess = (data) =>{
  return {
    type:questionConstants.ADD_QUESTION_SUCCESS,
    payload:{
      data
    }
  }
}
export const addquestionFailed = (error) =>{
  return {
    type:questionConstants.ADD_QUESTION_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setquestionEditing = (data) =>{
  // alert(data);
  return {
    type:questionConstants.SET_QUESTION_EDITING,
    payload: {
      data
    }
  }
}
export const setquestionEditingSuccess = (data) =>{
  return {
    type:questionConstants.SET_QUESTION_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setquestionEditingFailed = (data) =>{
  return {
    type:questionConstants.SET_QUESTION_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updatequestion = (data) => {
  return {
    type: questionConstants.UPDATE_QUESTION,
    payload: {
      data
    },
  };
};

export const updatequestionSuccess = data => {
  return {
    type: questionConstants.UPDATE_QUESTION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updatequestionFailed = error => {
  return {
    type: questionConstants.UPDATE_QUESTION_FAILED,
    payload: {
      error,
    },
  };
};