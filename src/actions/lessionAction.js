import * as lessionConstants from '../constants/lessionConstant';
export const fetchListlession = (params = {}) => {
  return {
    type: lessionConstants.FETCH_LESSION,
    payload: {
      params,
    },
  };
};

export const fetchListlessionSuccess = data => {
  return {
    type: lessionConstants.FETCH_LESSION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListlessionFailed = error => {
  return {
    type: lessionConstants.FETCH_LESSION_FAILED,
    payload: {
      error,
    },
  };
};

export const deletelession = (id) =>{
  return {
    type: lessionConstants.DELETE_LESSION,
    payload: {
      id,
    }
  }
}
export const deletelessionSuccess = (data) =>{
  return {
    type: lessionConstants.DELETE_LESSION_SUCCESS,
    payload: {
      data
    }
  }
}
export const deletelessionFailed = () => {
  return {
    type: lessionConstants.DELETE_LESSION_FAILED
  }
}
export const addlession = (data) =>{
  // alert("xin chao")
  return {
    type:lessionConstants.ADD_LESSION,
    payload:{
      data
    }
  }
}
export const addlessionSuccess = (data) =>{
  return {
    type:lessionConstants.ADD_LESSION_SUCCESS,
    payload:{
      data
    }
  }
}
export const addlessionFailed = (error) =>{
  return {
    type:lessionConstants.ADD_LESSION_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setlessionEditing = (data) =>{
  // alert(data);
  return {
    type:lessionConstants.SET_LESSION_EDITING,
    payload: {
      data
    }
  }
}
export const setlessionEditingSuccess = (data) =>{
  return {
    type:lessionConstants.SET_LESSION_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setlessionEditingFailed = (data) =>{
  return {
    type:lessionConstants.SET_LESSION_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updatelession = (data) => {
  return {
    type: lessionConstants.UPDATE_LESSION,
    payload: {
      data
    },
  };
};

export const updatelessionSuccess = data => {
  return {
    type: lessionConstants.UPDATE_LESSION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updatelessionFailed = error => {
  return {
    type: lessionConstants.UPDATE_LESSION_FAILED,
    payload: {
      error,
    },
  };
};