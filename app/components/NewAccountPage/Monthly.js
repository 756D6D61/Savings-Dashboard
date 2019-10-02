import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

const Content = styled.div`
height: 64.5vh;
width: 31.5vw;
background:#d5d8d0;
color:#5202FA;
border-radius:20px;
padding: 5px;
margin-top: 15px;
margin-left:-15px;
`
const Month = styled.div`
    height: 6vh;
    width: 28vw;
    background:#FFF;
    color:#5202FA;
    border-radius:10px;
    margin: 20px;
    padding:10px;
    font-weight:200;
`

class Monthly extends Component{
    render(){
        return(
            <Content>
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
            </Content>
        )
    }
}

export default Monthly