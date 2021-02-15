import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import signUpReducer from './signUpReducer'
import loginReducer from './loginReducer'

export const rootReduce = combineReducers({
    signUp: signUpReducer,
    login: loginReducer,
    form: formReducer
})