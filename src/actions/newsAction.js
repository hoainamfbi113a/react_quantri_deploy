import * as newsConstants from '../constants/newsConstant';
export const fetchListNews = (params = {}) => {
  return {
    type: newsConstants.FETCH_NEW,
    payload: {
      params,
    },
  };
};

export const fetchListNewsSuccess = data => {
  return {
    type: newsConstants.FETCH_NEW_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListNewsFailed = error => {
  return {
    type: newsConstants.FETCH_NEW_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteNew = (id) =>{
  return {
    type: newsConstants.DELETE_NEW,
    payload: {
      id,
    }
  }
}
export const deleteNewSuccess = (data) =>{
  return {
    type: newsConstants.DELETE_NEW_SUCCESS,
    payload: {
      data
    }
  }
}
export const deleteNewFailed = () => {
  return {
    type: newsConstants.DELETE_NEW_FAILED
  }
}
export const addNew = (data) =>{
  return {
    type:newsConstants.ADD_NEW,
    payload:{
      data
    }
  }
}
export const addNewSuccess = (data) =>{
  return {
    type:newsConstants.ADD_NEW_SUCCESS,
    payload:{
      data
    }
  }
}
export const addNewFailed = (error) =>{
  return {
    type:newsConstants.ADD_NEW_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setNewEditing = (data) =>{
  return {
    type:newsConstants.SET_NEW_EDITING,
    payload: {
      data
    }
  }
}
export const setNewEditingSuccess = (data) =>{
  return {
    type:newsConstants.SET_NEW_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setNewEditingFailed = (data) =>{
  return {
    type:newsConstants.SET_NEW_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updateNew = (data) => {
  return {
    type: newsConstants.UPDATE_NEW,
    payload: {
      data
    },
  };
};

export const updateNewSuccess = data => {
  return {
    type: newsConstants.UPDATE_NEW_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateNewFailed = error => {
  return {
    type: newsConstants.UPDATE_NEW_FAILED,
    payload: {
      error,
    },
  };
};