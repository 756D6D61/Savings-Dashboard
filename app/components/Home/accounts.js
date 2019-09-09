import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Accounts extends Component{
    render(){
        return(
            <Container>
                <div className="home-cards">
                <Row>
                        <Col><Link to="ViewAccount"><div className="cardHome1"></div></Link></Col>
                        <Col><Link to="ViewAccount"><div className="cardHome2"></div></Link></Col>
                        <Col><Link to="ViewAccount"><div className="cardHome3"></div></Link></Col>
                </Row>
               </div>
            </Container>
        )
    }
}

export default Accounts;