import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContainer extends Component {
    
    render() {
        console.log('main');
        return (
            <div className='container'>
                <h1> feed </h1>
            </div>
        );
    }
}

export default connect(null, null)(MainContainer);