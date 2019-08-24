import React, { Component } from 'react'
import Form from './NewAccount/form'
import Card from './NewAccount/cardDetails'
import { Container, Row, Col } from 'reactstrap'

class NewAccount extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><Card /></Col>
                    <Col><Form /></Col>
                </Row>
            </Container>
        )
    }
}

export default NewAccount;