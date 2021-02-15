import { createSelector } from 'reselect';


const signUpUserSelector = (state) => {
    // console.log(state, 'state selector')
    // sign up название reducer
    return state.signUp
};


export const signUpSelector = createSelector(
    signUpUserSelector,
    item => item
)


const loginUserSelector = (state) => {
    // console.log(state.login, 'STATE SELECTOR LOGIN');
    return state.login
}

export const loginSelector = createSelector(
    loginUserSelector,
    item => item
)
