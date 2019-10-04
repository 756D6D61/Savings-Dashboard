import React, { Component } from 'react'
import TopMenu from './NewAccountPage/TopMenu'
import AccountContainer from './NewAccountPage/AccountContainer'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'
import NewIcon from './Images/add.svg'
import { Link } from 'react-router-dom'

const AddIcon = styled.div`
    z-index:999;
    margin-left:95%;
    margin-top:-7.5%;
    position: static; 
`

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
                        <AccountContainer />
                    </Col>
                    <AddIcon>
                    <Link to="/AddAccounts"><NewIcon /></Link>
                </AddIcon>
                </Row>
            </div>
        )
    }
}

export default Accounts
