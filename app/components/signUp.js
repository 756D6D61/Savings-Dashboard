import React, { Component } from 'react';
import Form from './SignUp/form'

class SignUp extends Component{
    render(){
        return(
            <div className="auth">
                <h1>Sign Up</h1>
                <Form />
            </div>
            
        )
    }
}

export default SignUp;