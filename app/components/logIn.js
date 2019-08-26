import React, { Component } from 'react';
import Form from './LogIn/form'


class LogIn extends Component{
    render(){
        return(
            <div className="auth">
                <h1>Log In</h1>
                <Form />
            </div>
            
        )
    }
}

export default LogIn;