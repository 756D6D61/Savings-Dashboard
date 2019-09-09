import React, { Component } from 'react'
import Form from './NewAccount/form'
import Card from './NewAccount/cardDetails'
import { Container, Row, Col } from 'reactstrap'
import Menu from './Home/menu'

class NewAccount extends Component{
    render(){
        return(
            <div className="home">
                <Row><Menu/></Row>
                <Container>
                <Row>
                    <Col md={1}></Col>
                    <Col md={4}><Card /></Col>
                    <Col md={6}><Form /></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default NewAccount;