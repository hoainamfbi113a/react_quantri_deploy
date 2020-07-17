import * as classSubjectConstants from '../constants/classSubjectConstant';
export const fetchListclassSubject = (params = {}) => {
  return {
    type: classSubjectConstants.FETCH_CLASS_SUBJECT,
    payload: {
      params,
    },
  };
};

export const fetchListclassSubjectSuccess = data => {
  return {
    type: classSubjectConstants.FETCH_CLASS_SUBJECT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListclassSubjectFailed = error => {
  return {
    type: classSubjectConstants.FETCH_CLASS_SUBJECT_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteclassSubject = (id) =>{
  return {
    type: classSubjectConstants.DELETE_CLASS_SUBJECT,
    payload: {
      id,
    }
  }
}
export const deleteclassSubjectSuccess = (data) =>{
  return {
    type: classSubjectConstants.DELETE_CLASS_SUBJECT_SUCCESS,
    payload: {
      data
    }
  }
}
export const deleteclassSubjectFailed = () => {
  return {
    type: classSubjectConstants.DELETE_CLASS_SUBJECT_FAILED
  }
}
export const addclassSubject = (data) =>{
  return {
    type:classSubjectConstants.ADD_CLASS_SUBJECT,
    payload:{
      data
    }
  }
}
export const addclassSubjectSuccess = (data) =>{
  return {
    type:classSubjectConstants.ADD_CLASS_SUBJECT_SUCCESS,
    payload:{
      data
    }
  }
}
export const addclassSubjectFailed = (error) =>{
  return {
    type:classSubjectConstants.ADD_CLASS_SUBJECT_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setclassSubjectEditing = (data) =>{
  // alert(data);
  return {
    type:classSubjectConstants.SET_CLASS_SUBJECT_EDITING,
    payload: {
      data
    }
  }
}
export const setclassSubjectEditingSuccess = (data) =>{
  return {
    type:classSubjectConstants.SET_CLASS_SUBJECT_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setclassSubjectEditingFailed = (data) =>{
  return {
    type:classSubjectConstants.SET_CLASS_SUBJECT_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updateclassSubject = (data) => {
  return {
    type: classSubjectConstants.UPDATE_CLASS_SUBJECT,
    payload: {
      data
    },
  };
};

export const updateclassSubjectSuccess = data => {
  return {
    type: classSubjectConstants.UPDATE_CLASS_SUBJECT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateclassSubjectFailed = error => {
  return {
    type: classSubjectConstants.UPDATE_CLASS_SUBJECT_FAILED,
    payload: {
      error,
    },
  };
};