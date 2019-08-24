import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Accounts from './Home/accounts'
import Chart from './Home/chart'
import Menu from './Home/menu'
import Table from './Home/table'

class Home extends Component{
    render(){
        return(
            <Container>
                <Row><Menu/></Row>
                <Row><Accounts /></Row>
                <Row>
                    <Col><Chart /></Col>
                    <Col><Table /></Col>
                </Row>
            </Container>
        )
    }
}

export default Home;
/*
 <Row><Accounts /></Row>
                <Row>
                    <Col><Chart /></Col>
                    <Col><Table /></Col>
                </Row>
 */