import React, { Component } from 'react'
import TopMenu from './NewAccountPage/TopMenu'
import AddContainer from './NewAddAccount/AddAccountContainer'
import { Row, Col } from 'reactstrap'

class Accounts extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col>
                        <TopMenu />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddContainer />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Accounts
