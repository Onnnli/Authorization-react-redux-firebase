import React from 'react';
import { Field, reduxForm, Form } from 'redux-form'
import { required, email, minLength6, matchPassword } from '../utils/validation'

const SignUp = (props) => {
    const {handleSubmit} = props
    return (
        <div className='wrapper_form'>
            <Form onSubmit={handleSubmit} className='form'>
                <label htmlFor="email">Email</label>
                <Field component="input" type="text" name='email' placeholder='Your Email'  validate={[required, email]}/>

                <label htmlFor="password">Password</label>
                <Field component="input" type="password" name='password' placeholder='Your Password' validate={[required, minLength6]}/>

                <label htmlFor="password2">Password</label>
                <Field component="input" type="password" name='password2' placeholder='Repeat Your Password' />


                <button type='submit'>Sign Up</button>
                
            </Form>
    </div>
    );
};


const SignUpForm = reduxForm({
    form: 'signUp'
})(SignUp)
export default SignUpForm;