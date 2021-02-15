import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loginRequest } from '../actions';
import LoginForm from '../components/LoginForm';
import {loginSelector} from '../selectors/index'


class LoginFormContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate = () => {
        if(typeof(this.props.token) === 'string') {
            this.props.history.push('/feed')
        } 
    }

    handleSubmit = (values) => {
        this.props.userLogin({email: values.email, password: values.password, returnSecureToken: true})
}

    render() {
        return (
            <div className='container'>
                <LoginForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('MSTP LOGIN');
    return {
        token: loginSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        userLogin: (value) => dispatch(loginRequest(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
