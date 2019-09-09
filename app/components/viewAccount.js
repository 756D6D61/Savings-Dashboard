import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import AccDets from './ViewAccount/accountDetails'
import CardDets from './ViewAccount/cardDetails'
import Chart from './Home/chart'
import Table from './Home/table'
import Menu from './Home/menu'

class ViewAccount extends Component{
    render(){
        return(
            <div className="home">
                 <Row>
                    <Menu/>
                </Row>
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
            </div>  
        )
    }
}

export default ViewAccount;