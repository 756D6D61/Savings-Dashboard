import React, { Component } from 'react';
import { Col, Form, Label, FormGroup, Button, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class LogInForm extends Component{
    render(){
        return(
            <Form>
                <FormGroup row>
                    <Label md={2}>Username</Label>
                    <Col md={10}><Input /></Col>
                </FormGroup>
                <FormGroup row>
                    <Label md={2}>Password</Label>
                    <Col md={10}><Input /></Col>
                </FormGroup>
                <Link to="SignUp">
                <Button>Submit</Button>
                </Link>
            </Form>
        )
    }
}

export default LogInForm;