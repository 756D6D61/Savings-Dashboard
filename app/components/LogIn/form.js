import React, { Component } from 'react';
import { Form, Label, FormGroup, Button, Input } from 'reactstrap'

class LogInForm extends Component{
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
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default LogInForm;