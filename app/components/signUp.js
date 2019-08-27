import React, { Component } from 'react';
import Form from './SignUp/form'
import People from './Images/people.svg'
import { Container, Row, Col } from 'reactstrap'

class SignUp extends Component{
    render(){
        return(
            <div className="auth">
                <Container>
                        <h1 className="logIn">Sign Up</h1>
                        <hr />
                        <Row>
                        <Col md={2}></Col>
                        <Col md={8}><Form /></Col>
                        <Col md={2}></Col>
                        </Row>
                        <div className="image">
                            <People />
                        </div>
                </Container>
            </div>
            
        )
    }
}

export default SignUp;