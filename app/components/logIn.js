import React, { Component } from 'react';
import Form from './LogIn/form'
import People from './Images/people.svg'
import { Container, Row, Col } from 'reactstrap'

class LogIn extends Component{
    render(){
        return(
            <div className="auth">
                <Container>
                        <h1 className="logIn">Log In</h1>
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

export default LogIn;
 //