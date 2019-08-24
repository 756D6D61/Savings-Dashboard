import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Accounts extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>acc 1</Col>
                    <Col>acc 2</Col>
                    <Col>acc 3</Col>
                </Row>
            </Container>
        )
    }
}

export default Accounts;