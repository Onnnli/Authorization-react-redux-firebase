import React from 'react';
import { Field, reduxForm, Form } from 'redux-form'
import {NavLink} from 'react-router-dom'
import renderField from './RenderField'
import { required, email, minLength6 } from '../utils/validation';



const Login = (props) => {
    // console.log(props);
    const {handleSubmit} = props
    return (
        <div className='wrapper_form'>
            <Form onSubmit={handleSubmit} className='form'>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <label htmlFor="email">Email</label>
                    <Field component={renderField} type="text" name='email' placeholder='Your Email'  validate={[required, email]} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field component={renderField} type="password" name='password' placeholder='Your Password'  validate={[required, minLength6]}/>
                </div>

                <button >LOGIN</button>
                <NavLink to='/signup'>signup</NavLink>
            </Form>
        </div>
    );
};

const LoginForm = reduxForm({
    form: 'login'
})(Login)



export default LoginForm;