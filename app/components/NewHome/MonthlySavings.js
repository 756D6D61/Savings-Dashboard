import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

const Content = styled.div`
    height: 75.5vh;
    width: 25vw;
    background:#A5A5A5;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top: 15px;
    margin-left:-100px;
`
const Month = styled.div`
    height: 6vh;
    width: 22vw;
    background:#FFF;
    color:#5202FA;
    border-radius:10px;
    margin-left:1.5vw;
    margin-bottom: 10px;
    padding:10px;
    font-weight:200;
`
const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 30px;
    text-align:center;
    font-weight:500;
    font-family: Source Code Pro;
    color: #8579B9;
`

class MonthlySavings extends Component{
    render(){
        return(
            <Content>
                <Title>Monthly Savings</Title>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">January</Col>
                        <Col md={4} className="text-md-right">£1,020</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">February</Col>
                        <Col md={4} className="text-md-right">£3,129</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">March</Col>
                        <Col md={4} className="text-md-right">£2,009</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">April</Col>
                        <Col md={4} className="text-md-right">£3,001</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">May</Col>
                        <Col md={4} className="text-md-right">£1,100</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">June</Col>
                        <Col md={4} className="text-md-right">£2,222</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">July</Col>
                        <Col md={4} className="text-md-right">£1,010</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">August</Col>
                        <Col md={4} className="text-md-right">£4,201</Col>
                    </Row>
                </Month>
                <Month>
                    <Row>
                        <Col md={8} className="text-md-left">September</Col>
                        <Col md={4} className="text-md-right">£1,204</Col>
                    </Row>
                </Month>
            </Content>
        )
    }
}

export default MonthlySavings