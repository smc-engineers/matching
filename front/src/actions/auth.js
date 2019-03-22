export const openLoginDialog = () => async dispatch => {
  dispatch({type:'OPEN_LOGIN_DIALOG'})
}

export const closeLoginDialog = () => async dispatch => {
  dispatch({type:'CLOSE_LOGIN_DIALOG'})
}
