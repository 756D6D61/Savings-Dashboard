import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Accounts extends Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <div className="space">
                            <div className="account-details"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Accounts;