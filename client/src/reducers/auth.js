import {AUTH_USER} from '../actions/types'
import {AUTH_ERROR} from '../actions/types'

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
  }
  

  export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
      case AUTH_USER:
        console.log(state)
        return {...state, errorMessage: 'Success', authenticated: action.payload }
      case AUTH_ERROR:
        return {...state, errorMessage: action.payload }
      default:
        return state
    }
  }