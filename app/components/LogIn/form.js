import React, { Component } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

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
                <Link to="SignUp">
                <Button>Submit</Button>
                </Link>
            </Form>
        )
    }
}

export default SignUpForm;