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
    overflow-y: scroll;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 7px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background-color: rgba(0,0,0,.5);
        -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
    }
`
const Right = styled.div`
    background: #EAEAEA;
    width:75vw;
    height: 90vh;
    margin-top: -660px;
    margin-right: -102px;
    z-index:999;
    float:right;
`

class AccountContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            childVisible: false
        }
    }
   onClick() {
       this.setState({
           childVisible: !this.state.childVisible
       })
   }
    render(){
        return(
            <Account>
                   
                    <Left>
                    <button onClick={() => this.onClick()}>test</button>
                        <SideAccounts onClick={() => this.onClick()}/>
                        
                       
                        <SideAccounts />
                        <SideAccounts />
                        </Left>
                        
                    
                    <Right>
                    
                {this.state.childVisible ? (
                    <ViewAccountDetails />
                ):null}
                        
                    </Right>
            </Account>
        )
    }
}

export default AccountContainer

/**
 * <EditAccountDetails />
                        <ViewAccountDetails />
 */