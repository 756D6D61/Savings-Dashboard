import React, { Component } from 'react';
import Form from './LogIn/form'
import People from './Images/people.svg'

class LogIn extends Component{
    render(){
        return(
            <div className="auth">
                <h1>Log In</h1>
                <Form />
                <People />
            </div>
            
        )
    }
}

export default LogIn;
 //