import React, { Component } from 'react';
import {connect} from 'react-redux'
// import { getFormInitialValues, getFormValues } from 'redux-form';
import {signUpRequest} from  '../actions/index'
import SignUpForm from '../components/SignUpForm';
import signUpReducer from '../reducers/signUpReducer';
import {signUpSelector} from '../selectors/index'



class SignUpContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate = () => {
        console.log('login STATUS');
        if (this.props.createUserStatus === 200) {
            this.props.history.push('/');
        }
      }


    handleSubmit = values => {
        // console.log(values, 'submit');
        this.props.userCreate({email: values.email, password: values.password, returnSecureToken: true})
       
    };
    
    render() {

        console.log(this.props.loginStatus, 'SIGN CONTAINER');

        return (
            <div className='container'>
                <SignUpForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(signUpSelector(state), 'MSTP');
    return {
        createUserStatus: signUpSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        userCreate:(value) =>  dispatch(signUpRequest(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);