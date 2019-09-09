import React, { Component } from 'react';
import { Form, Label, FormGroup, Input, Button } from 'reactstrap'
import axios from 'axios';

class NewAccForm extends Component{
    constructor() {
        super();
        this.state = {
            formFields: {
                accountName:'',
                accountType:'',
                interest: 0, 
                savingsGoals: 0
            }
        }
    }
    render(){
        return(
            <Form>
                <FormGroup>
                    <Label>Account Name</Label>
                    <Input 
                        name="accountName" onChange={(e) => this.inputChangeHandler.call(this, e)} 
                        value={this.state.formFields.accountName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Account Type</Label>
                    <Input
                        name="accountType" onChange={(e) => this.inputChangeHandler.call(this, e)} 
                        value={this.state.formFields.accountName}
                     />
                </FormGroup>
                <FormGroup>
                    <Label>Interest Earned</Label>
                    <Input 
                        name="interest" onChange={(e) => this.inputChangeHandler.call(this, e)} 
                        value={this.state.formFields.accountName}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Savings Goal </Label>
                    <Input 
                        name="savingsGoals" onChange={(e) => this.inputChangeHandler.call(this, e)} 
                        value={this.state.formFields.accountName}
                    />
                </FormGroup>
                <FormGroup>
                    <Button>Submit</Button>
                </FormGroup>
            </Form>
        )
    }
    inputChangeHandler(e) {
        let formFields = {...this.state.formFields}
        formFields[e.target.name] = e.target.value;
        this.setState({
            formFields
        })
    }

    formHandler(formFields) {
        axios.post('https://o39ren2sp5.execute-api.us-west-1.amazonaws.com/latest/api/contacts', formFields)
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}

export default NewAccForm;