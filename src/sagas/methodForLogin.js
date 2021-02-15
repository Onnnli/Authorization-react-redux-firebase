
import { call, put } from 'redux-saga/effects';
import {signUpSuccess, signUpFail } from '../actions/index';
import * as axiosMethods from '../axios/index'







export function* signUpRequest(payload) {
  console.log(payload.target[0].value, 'SAGAX');
  const apiKey = 'AIzaSyAWCH8mPcCh1kvxkMxLsre5ndngAiGH8TE' 
  try {
    const register = yield call(axiosMethods.axiosForLoginAndRegistration, `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, payload, 'post');
    yield put(signUpSuccess(register));
  } catch (e) {
    console.log( payload ,'sagaErr');
    yield put(signUpFail(e));
  }
}






















// import firebase from 'firebase'
// import "firebase/firestore"
// import "firebase/auth"
// import ReduxSagaFirebase from 'redux-saga-firebase'

// var firebaseConfig = {
//     apiKey: "AIzaSyAWCH8mPcCh1kvxkMxLsre5ndngAiGH8TE",
//     authDomain: "auth-cb266.firebaseapp.com",
//     projectId: "auth-cb266",
//     storageBucket: "auth-cb266.appspot.com",
//     messagingSenderId: "35427523783",
//     appId: "1:35427523783:web:4e29fa8b6e2a89d1d732e2"
//   };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.firestore().setting({ timestampsInSnapshots: true}) 
//   const reduxSagaFirebase = new ReduxSagaFirebase(firebaseConfig)
//   const auth = firebase.auth()
  

// export function* signUpRequest(action) {
//     console.log('SAGA');
//     const authProvider = auth.createUserWithEmailAndPassword(action.signUpRequest.payload)
//   try {
//     const data = yield call(reduxSagaFirebase.auth, authProvider)
//     console.log(data, 'DATA');
//     yield put(signUpSuccess(data))
//   }
//   catch(error) {
//     yield put(signUpFail(error))
//   }
// }

// export default function* rootSaga() {
//   yield all([
//     takeEvery(types.LOGIN.REQUEST, loginSaga)
//   ])





// export function* signUpRequest(payload) {
//     const apiKey = "AIzaSyAWCH8mPcCh1kvxkMxLsre5ndngAiGH8TE";
//     try {
//       const register = yield call( firebase.auth().createUserWithEmailAndPassword(payload)
//       );
//       yield put(signUpSuccess(register.status));
//     } catch (e) {
//       yield put(signUpFail(e));
//     }
//   }


//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//   }
//   console.log(error);
// });