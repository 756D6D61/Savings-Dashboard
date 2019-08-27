import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Accounts extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col><Link to="ViewAccount"><div className="cardHome1"></div></Link></Col>
                </Row>
            </Container>
        )
    }
}

export default Accounts;