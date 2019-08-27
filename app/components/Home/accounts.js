import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Accounts extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><div className="cardHome1"></div></Col>
                    <Col><div className="cardHome2"></div></Col>
                    <Col><div className="cardHome3"></div></Col>
                </Row>
            </Container>
        )
    }
}

export default Accounts;