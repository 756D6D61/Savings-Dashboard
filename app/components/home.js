import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Accounts from './Home/accounts'
import Chart from './Home/chart'
import Menu from './Home/menu'
import Table from './Home/table'
import { connect } from 'react-redux';
import { simpleAction } from '../actions/simpleAction';

const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})
class Home extends Component{
    render(){
        return(
            <div className="home">
                <Row><Menu/></Row>
                <Container>
                    <Row>
                        <Accounts />
                    </Row>
                    <Row>
                        <Col md={6}><Chart /></Col>
                        <Col md={6}><Table /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
/*
 <Row><Accounts /></Row>
                <Row>
                    <Col><Chart /></Col>
                    <Col><Table /></Col>
                </Row>
 */