import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import AccDets from './ViewAccount/accountDetails'
import CardDets from './ViewAccount/cardDetails'
import Table from './ViewAccount/table'
import Chart from'./ViewAccount/chart'

class ViewAccount extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <Row><CardDets /></Row>
                        <Row><AccDets /></Row>
                    </Col>
                    <Col>
                        <Row><Table /></Row>
                        <Row><Chart /></Row>
                    </Col>
                </Row>
            </Container>
            
        )
    }
}

export default ViewAccount;