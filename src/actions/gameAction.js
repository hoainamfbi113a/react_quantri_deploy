import * as gameConstants from '../constants/gameConstant';
export const fetchListgame = (params = {}) => {
  return {
    type: gameConstants.FETCH_GAME,
    payload: {
      params,
    },
  };
};

export const fetchListgameSuccess = data => {
  return {
    type: gameConstants.FETCH_GAME_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchListgameFailed = error => {
  return {
    type: gameConstants.FETCH_GAME_FAILED,
    payload: {
      error,
    },
  };
};

export const deletegame = (id) =>{
  return {
    type: gameConstants.DELETE_GAME,
    payload: {
      id,
    }
  }
}
export const deletegameSuccess = (data) =>{
  return {
    type: gameConstants.DELETE_GAME_SUCCESS,
    payload: {
      data
    }
  }
}
export const deletegameFailed = () => {
  return {
    type: gameConstants.DELETE_GAME_FAILED
  }
}
export const addgame = (data) =>{
  return {
    type:gameConstants.ADD_GAME,
    payload:{
      data
    }
  }
}
export const addgameSuccess = (data) =>{
  return {
    type:gameConstants.ADD_GAME_SUCCESS,
    payload:{
      data
    }
  }
}
export const addgameFailed = (error) =>{
  return {
    type:gameConstants.ADD_GAME_FAILED,
    payload:{
      error,
      
    }
  }
}
export const setgameEditing = (data) =>{
  // alert(data);
  return {
    type:gameConstants.SET_GAME_EDITING,
    payload: {
      data
    }
  }
}
export const setgameEditingSuccess = (data) =>{
  return {
    type:gameConstants.SET_GAME_EDITING_SUCCESS,
    payload: {
      data
    }
  }
}
export const setgameEditingFailed = (data) =>{
  return {
    type:gameConstants.SET_GAME_EDITING_FAILED,
    payload: {
      data
    }
  }
}
export const updategame = (data) => {
  return {
    type: gameConstants.UPDATE_GAME,
    payload: {
      data
    },
  };
};

export const updategameSuccess = data => {
  return {
    type: gameConstants.UPDATE_GAME_SUCCESS,
    payload: {
      data,
    },
  };
};

export const updategameFailed = error => {
  return {
    type: gameConstants.UPDATE_GAME_FAILED,
    payload: {
      error,
    },
  };
};