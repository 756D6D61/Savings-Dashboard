import React, { Component } from 'react';
import Form from './LogIn/form'
import People from './Images/people.svg'
import { Container, Row, Col } from 'reactstrap'

class LogIn extends Component{
    render(){
        return(
            <div className="auth">
                        <h1 className="logIn">Log In</h1>
                        <hr />
                        <Row>
                        <Col md={2}></Col>
                        <Col md={8}><Form />      
                        <br />
                        </Col>
                        <Col md={2}></Col>
                        </Row>
                        <div className="image">
                            <People width="110vw"/>
                        </div>
            </div>
            
        )
    }
}

export default LogIn;
