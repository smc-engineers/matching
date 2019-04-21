const initialState={
  isLoading: false
}

export default (state=initialState, action) => {
  switch(action.type){

    case 'START_LODING':
      return {...state, isLoading: true}

    case 'FINISH_LODING':
      return {...state, isLoading:false}

    default:
      return state

  }
}
