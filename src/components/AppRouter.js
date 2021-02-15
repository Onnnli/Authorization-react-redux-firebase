import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginFormContainer from '../containers/LoginFormContainer'
import SignUpContainer from '../containers/SignUpContainer';
import MainContainer from '../containers/MainContainer'
const AppRouter = (props) => {
   
    const token = useSelector((state) => {
        // console.log(state, 'TOKEN STATE');
        return (state.login)
    }
        )

    console.log(token, 'TOKEN router');
    return (       
        <Router>
            <Switch>
                <Route exact path='/' component={LoginFormContainer} />
                <Route exact path='/signup' component={SignUpContainer} />
                { token ?  (
                        <Router exact path='/feed'  >
                            < MainContainer {...props} />
                        </Router> ) 
                        : 
                        (
                            <Redirect to="/" />
                        )
                        
                }
            </Switch>
        </Router>
    )   
};

export default AppRouter;