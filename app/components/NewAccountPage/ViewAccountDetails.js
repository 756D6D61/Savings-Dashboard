import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import Graph from './Graph'

const AccInfo = styled.div`
    font-weight:200;
    height: 5vh;
    margin:15px;
    text-align: left;
    font-family: Helvetica Neue;
    font-size: 30px;
    color:#5202FA;
`

const HR = styled.hr`
    background-color:#5202FA;
    margin:15px;
    width:90%;
`

class ViewAccount extends Component{
    render(){
        return(
            <Row>
                <Col md={12}>
                    <AccInfo>
                        <Row>
                            <Col md={4}>HSBC Super Saver</Col>
                            <Col md={3}>General</Col>
                            <Col md={3}>£10,203</Col>
                            <Col md={2}>0.05%</Col>
                        </Row>
                    </AccInfo>
                    <HR/>
                </Col>
                
                <Col md={6}><Graph /></Col>
                <Col md={6}>Monthly savings</Col>
            </Row>
        )
    }
}

export default ViewAccount