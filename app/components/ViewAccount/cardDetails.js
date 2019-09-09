import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class CardDetails extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="space">
                            <div className="card-details"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CardDetails;