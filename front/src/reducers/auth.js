const initialState={
  isShowLoginDialog: false
}

export default(state=initialState, action) => {
  switch(action.type){

    case 'OPEN_LOGIN_DIALOG':
      return {...state, isShowLoginDialog: true}

    case 'CLOSE_LOGIN_DIALOG':
      return {...state, isShowLoginDialog: false}

    default:
      return state
  }
}
