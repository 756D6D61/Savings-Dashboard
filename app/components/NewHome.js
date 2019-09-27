import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class NewHome extends Component{
    render(){
        return(
            <div className="home">
                <Row>
                <Col md={2}>Side Menu</Col>
                <Col md={10}>
                    <Row>
                        <Col md={4}>
                            <Row>
                                welcome
                            </Row>
                            <Row>
                                one
                            </Row>
                            <Row>
                                two
                            </Row>
                        </Col>
                        <Col md={8}>
                            <Row>
                                one liner
                            </Row>
                            <Row>
                                <Col md={6}>
                                    graph
                                </Col>
                                <Col md={6}>
                                    monthly money
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </div>
        )
    }
}

export default NewHome
