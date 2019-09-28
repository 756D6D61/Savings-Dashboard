import React, { Component } from 'react'
import TopMenu from './NewAccountPage/TopMenu'
import AccountContainer from './NewAccountPage/AccountContainer'
import { Row, Col } from 'reactstrap'

class Accounts extends Component{
    render(){
        return(
            <div className="home">
                <Row>
                    <Col>
                        <TopMenu />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AccountContainer />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Accounts
