import {handleActions} from 'redux-actions'

import * as action from '../actions/index'

const initialState = {
    email: '',
    password: '',
    returnSecureToken: true
}

const loginReducer = handleActions(
    {
        [action.loginRequest]: (state, action) => {
            console.log('LOGIN REQUEST REDUCER');
            return action.payload
        },
        [action.loginSuccess]: (state, action) => {
            console.log('LOGIN SUCCESS REDUCER');
            return action.payload
        },
        [action.loginFail]: (state, action) => {
            console.log('LOGIN FAIL REDUCER');
            return action.payload
        }
    },
    initialState
)
export default loginReducer;