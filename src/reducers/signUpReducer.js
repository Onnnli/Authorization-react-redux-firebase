import {handleActions} from 'redux-actions'
import * as action from '../actions/index'

const initialState = {
    email: '',
    password: '',
    returnSecureToken: true
}

const signUpReducer = handleActions(
    {
        [action.signUpRequest]: (state, action) => {
            console.log('SIGN REQ REDUCER');
            console.log(action.payload ,'SIGN REQ REDUCER');

            return action.payload
        }, 
        [action.signUpSuccess]: (state, action) => {
            console.log(action.payload ,'SIGN SUCCESS REDUCER');



            return action.payload
        },
        [action.signUpFail]: (state, action) => {
            console.log(action.payload,'SIGN ERR REDUCER');
            return action.payload
        },
    },
        initialState
    
)
export default signUpReducer;