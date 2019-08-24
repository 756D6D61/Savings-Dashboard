import React, { Component } from 'react';
import { Form, Label, FormGroup, Input } from 'reactstrap'

class NewAccForm extends Component{
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label>Account Name</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Account Type</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Interest Earned</Label>
                    <Input />
                </FormGroup>
                <FormGroup>
                    <Label>Savings Goal </Label>
                    <Input />
                </FormGroup>
            </Form>
        )
    }
}

export default NewAccForm;