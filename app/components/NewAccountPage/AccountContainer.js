import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SideAccounts from './SideAccounts'
import EditAccountDetails from './EditAccountDetails'
import ViewAccountDetails from './ViewAccountDetails'

class AccountContainer extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col md={4}>
                        <SideAccounts />
                    </Col>
                    <Col md={8}>
                        <EditAccountDetails />
                        <ViewAccountDetails />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AccountContainer