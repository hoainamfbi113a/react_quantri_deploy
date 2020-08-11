import * as forumConstants from '../constants/forumConstant';
export const fetchListforum = (params = {}) => {
  return {
    type: forumConstants.FETCH_FORUM,
    payload: {
      params,
    },
  };
};

export const fetchListforumSuccess = data => {
  return {
    type: forumConstants.FETCH_FORUM_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListforumFailed = error => {
  return {
    type: forumConstants.FETCH_FORUM_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteforum = (id) =>{
  return {
    type: forumConstants.DELETE_FORUM,
    payload: {
      id,
    }
  }
}
export const deleteforumSuccess = (data) =>{
  return {
    type: forumConstants.DELETE_FORUM_SUCCESS,
    payload: {
      data
    }
  }
}
export const deleteforumFailed = () => {
  return {
    type: forumConstants.DELETE_FORUM_FAILED
  }
}
export const addforum = (data) =>{
  return {
    type:forumConstants.ADD_FORUM,
    payload:{
      data
    }
  }
}
export const addforumSuccess = (data) =>{
  return {
    type:forumConstants.ADD_FORUM_SUCCESS,
    payload:{
      data
    }
  }
}
export const addforumFailed = (error) =>{
  return {
    type:forumConstants.ADD_FORUM_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setforumEditing = (data) =>{
  // alert(data);
  return {
    type:forumConstants.SET_FORUM_EDITING,
    payload: {
      data
    }
  }
}
export const setforumEditingSuccess = (data) =>{
  return {
    type:forumConstants.SET_FORUM_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setforumEditingFailed = (data) =>{
  return {
    type:forumConstants.SET_FORUM_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updateforum = (data) => {
  return {
    type: forumConstants.UPDATE_FORUM,
    payload: {
      data
    },
  };
};

export const updateforumSuccess = data => {
  return {
    type: forumConstants.UPDATE_FORUM_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateforumFailed = error => {
  return {
    type: forumConstants.UPDATE_FORUM_FAILED,
    payload: {
      error,
    },
  };
};