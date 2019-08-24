import React, { Component } from 'react';
import { Form, Label, FormGroup, Input } from 'reactstrap'

class SignUpForm extends Component{
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label>Username</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input />
                </FormGroup>
            </Form>
        )
    }
}

export default SignUpForm;