import {takeEvery, all, select, put, call} from 'redux-saga/effects'
import * as axiosMethods from '../axios/index'
import {signUpSuccess, signUpFail, loginSuccess, loginFail} from '../actions/index';
import * as action from '../actions/index'



// select use for state

//sign in
export function* signUpRequest(action) {
  console.log(action, 'SAGAX');
  const apiKey = 'AIzaSyAWCH8mPcCh1kvxkMxLsre5ndngAiGH8TE' 
  const state = yield select()
  console.log(state, 'STATE');
  try {
    const register = yield call(axiosMethods.axiosForLoginAndRegistration, `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, action.payload, 'post');
    console.log(register.status, 'REGISTER');
    yield put(signUpSuccess(register.status));
  } catch (e) {
    console.log(action ,'sagaErr');
    yield put(signUpFail(e));
  }
}

export function* watchSignUpRequest() {
  yield takeEvery(action.signUpRequest, signUpRequest)
}


/// login
export function* loginRequest(action) {
  console.log('SAGA LOGIN');
  const apiKey = 'AIzaSyAWCH8mPcCh1kvxkMxLsre5ndngAiGH8TE' ;
  const state = yield select();
  console.log(state, 'STATE SAGA LOGIN');
  try {
    const user = yield call(axiosMethods.axiosForLoginAndRegistration, `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, action.payload, 'post');
    // console.log(user.data.idToken, 'USER STATUS');
    yield put(loginSuccess(user.data.idToken))
  
  
  } catch(e) {
    console.log(action, 'catch saga');
    yield put(loginFail(e))
  }
}

export function* watchLoginRequest() {
  yield takeEvery(action.loginRequest, loginRequest)
}


export function* rootSaga() {
  yield all([watchSignUpRequest(), watchLoginRequest()])
}   
