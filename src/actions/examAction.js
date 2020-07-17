import * as examConstants from '../constants/examConstant';
export const fetchListexam = (params = {}) => {
  return {
    type: examConstants.FETCH_EXAM,
    payload: {
      params,
    },
  };
};

export const fetchListexamSuccess = data => {
  return {
    type: examConstants.FETCH_EXAM_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListexamFailed = error => {
  return {
    type: examConstants.FETCH_EXAM_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteexam = (id) =>{
  return {
    type: examConstants.DELETE_EXAM,
    payload: {
      id,
    }
  }
}
export const deleteexamSuccess = (data) =>{
  return {
    type: examConstants.DELETE_EXAM_SUCCESS,
    payload: {
      data
    }
  }
}
export const deleteexamFailed = () => {
  return {
    type: examConstants.DELETE_EXAM_FAILED
  }
}
export const addexam = (data) =>{
  return {
    type:examConstants.ADD_EXAM,
    payload:{
      data
    }
  }
}
export const addexamSuccess = (data) =>{
  return {
    type:examConstants.ADD_EXAM_SUCCESS,
    payload:{
      data
    }
  }
}
export const addexamFailed = (error) =>{
  return {
    type:examConstants.ADD_EXAM_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setexamEditing = (data) =>{
  // alert(data);
  return {
    type:examConstants.SET_EXAM_EDITING,
    payload: {
      data
    }
  }
}
export const setexamEditingSuccess = (data) =>{
  return {
    type:examConstants.SET_EXAM_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setexamEditingFailed = (data) =>{
  return {
    type:examConstants.SET_EXAM_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updateexam = (data) => {
  return {
    type: examConstants.UPDATE_EXAM,
    payload: {
      data
    },
  };
};

export const updateexamSuccess = data => {
  return {
    type: examConstants.UPDATE_EXAM_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateexamFailed = error => {
  return {
    type: examConstants.UPDATE_EXAM_FAILED,
    payload: {
      error,
    },
  };
};