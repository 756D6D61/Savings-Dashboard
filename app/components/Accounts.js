import React, { Component } from 'react'
import TopMenu from './NewAccountPage/TopMenu'
import AccountContainer from './NewAccountPage/AccountContainer'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import NewIcon from './Images/add.svg'
import { Link } from 'react-router-dom'

const TopBar = styled.div`
    z-index: 999;
    background: #A5A5A5;
    margin-top:2%;
    width:100%;
`
const Left = styled.div`
    background: #393939;
    height: 6vh;
    width:30vw; 
    margin-bottom:-40px;
`
const Right = styled.div`
    background: #000;
    height: 6vh;
    width:70vw; 
    margin-bottom:-40px;
    margin-left:30vw;
    margin-top:-50px;
`

class Accounts extends Component{
    render(){
        return(
            <div>
                <Left></Left>
                <Right></Right>
                <Row>
                    <TopBar>
                        <Col>
                            <TopMenu />
                        </Col>
                    </TopBar>
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
/*<AddIcon>
                    <Link to="/AddAccounts"><NewIcon /></Link>
                </AddIcon>*/