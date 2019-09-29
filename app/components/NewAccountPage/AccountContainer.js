import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SideAccounts from './SideAccounts'
import EditAccountDetails from './EditAccountDetails'
import ViewAccountDetails from './ViewAccountDetails'
import styled from 'styled-components'


const Account = styled.div`
    height: 90vh;
    width: 92.90vw;
    margin-left:75px;
    margin-top:60px
`
const Left = styled.div`
    background: #F7F7F7;
    border-top-left-radius:20px;
    height: 90vh;
`
const Right = styled.div`
    background: #EAEAEA;
    width:70vw;
    height: 90vh;
    margin-top: 0;
    margin-left:-100px;
    z-index:999;
`

class AccountContainer extends Component{
    render(){
        return(
            <Account>
                <Row>
                   
                    <Col md={4}>
                    <Left>
                        <SideAccounts />
                        </Left>
                    </Col>
                    
                    <Right>
                    <Col md={12}>
                        <EditAccountDetails />
                        <ViewAccountDetails />
                    </Col>
                    </Right>
                </Row>
            </Account>
        )
    }
}

export default AccountContainer