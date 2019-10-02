import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'

class ViewAccount extends Component{
    render(){
        return(
            <Row>
                <Col md={12}>Top Info</Col>
                <Col md={6}>Graph</Col>
                <Col md={6}>Monthly savings</Col>
            </Row>
        )
    }
}

export default ViewAccount