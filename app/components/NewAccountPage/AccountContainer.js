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
    width:25vw;
`
const Right = styled.div`
    background: #EAEAEA;
    width:75vw;
    height: 90vh;
    margin-top: -660px;
    margin-right: -30px;
    z-index:999;
    float:right;
`

class AccountContainer extends Component{
    render(){
        return(
            <Account>
                   
                    <Left>
                        <SideAccounts />
                        </Left>
                    
                    <Right>
                        <EditAccountDetails />
                        <ViewAccountDetails />
                    </Right>
            </Account>
        )
    }
}

export default AccountContainer