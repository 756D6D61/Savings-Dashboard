import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

const Menu = styled.div`
    width: 100%;
    color:#ADADAD;
`
class TopMenu extends Component{
    render(){
        return(
            <Menu>
            <Row>
                <Col md={10}>
                    <HomeIcon /> Home
                    <AccountIcon /> Accounts
                </Col>
                <Col md={2}>User</Col>
            </Row>
            </Menu>
        )
    }
}

export default TopMenu