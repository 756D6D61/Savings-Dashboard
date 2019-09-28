import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Form from './AddForm'
import Image from './AddImage'

class AccountContainer extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={8}>
                        <Form />
                    </Col>
                    <Col md={4}>
                        <Image />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AccountContainer