import React, { Component } from 'react'
import Form from './NewAccount/form'
import Card from './NewAccount/cardDetails'
import { Container, Row, Col } from 'reactstrap'
import Menu from './Home/menu'

class NewAccount extends Component{
    render(){
        return(
            <div className="home">
            <Container>
                <Row><Menu/></Row>
                <Row>
                    <Col><Card /></Col>
                    <Col><Form /></Col>
                </Row>
            </Container>
            </div>
        )
    }
}

export default NewAccount;