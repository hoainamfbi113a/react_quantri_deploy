import * as memberConstants from '../constants/memberConstant';
export const fetchListMember = (params = {}) => {
  return {
    type: memberConstants.FETCH_MEMBER,
    payload: {
      params,
    },
  };
};

export const fetchListMemberSuccess = data => {
  return {
    type: memberConstants.FETCH_MEMBER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListMemberFailed = error => {
  return {
    type: memberConstants.FETCH_MEMBER_FAILED,
    payload: {
      error,
    },
  };
};

export const deleteMember = (id) =>{
  return {
    type: memberConstants.DELETE_MEMBER,
    payload: {
      id,
    }
  }
}
export const deleteMemberSuccess = (data) =>{
  return {
    type: memberConstants.DELETE_MEMBER_SUCCESS,
    payload: {
      data
    }
  }
}
export const deleteMemberFailed = () => {
  return {
    type: memberConstants.DELETE_MEMBER_FAILED
  }
}
export const addMember = (data) =>{
  return {
    type:memberConstants.ADD_MEMBER,
    payload:{
      data
    }
  }
}
export const addMemberSuccess = (data) =>{
  return {
    type:memberConstants.ADD_MEMBER_SUCCESS,
    payload:{
      data
    }
  }
}
export const addMemberFailed = (error) =>{
  return {
    type:memberConstants.ADD_MEMBER_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setMemberEditing = (data) =>{
  return {
    type:memberConstants.SET_MEMBER_EDITING,
    payload: {
      data
    }
  }
}
export const setMemberEditingSuccess = (data) =>{
  return {
    type:memberConstants.SET_MEMBER_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setMemberEditingFailed = (data) =>{
  return {
    type:memberConstants.SET_MEMBER_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updateMember = (data) => {
  return {
    type: memberConstants.UPDATE_MEMBER,
    payload: {
      data
    },
  };
};

export const updateMemberSuccess = data => {
  return {
    type: memberConstants.UPDATE_MEMBER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updateMemberFailed = error => {
  return {
    type: memberConstants.UPDATE_MEMBER_FAILED,
    payload: {
      error,
    },
  };
};