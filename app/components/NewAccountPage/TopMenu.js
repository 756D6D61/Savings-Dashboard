import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/HomeOutlined';
import Add from '@material-ui/icons/QueueOutlined';
import Edit from '@material-ui/icons/BorderColorOutlined';
import View from '@material-ui/icons/VisibilityOutlined';
import Person from '@material-ui/icons/Person';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

const Menu = styled.div`
    color:#FFF;
    margin-top: 2%;
    padding:5px;
    z-index:999;
    background: #A5A5A5;
`
const AccountLink = styled.p`
    text-align: left;
`
const StyledLink = styled(
    styled(AccountLink)`
      color: #5202FA;
      &:hover {
        text-decoration: underline;
      }
    `,
    'active'
  )`
    color: #5202FA;
  `;
const Circle = styled.div`
    background: #ADADAD;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const Icon = styled.div`
      padding-left: 30px;
      padding-top:5px;
`
const UserName = styled.p`
      font-weight:200;
      font-family: Source Code Pro;
      margin-left:50%;
`

class TopMenu extends Component{
    render(){
        return(
            <Menu>
            <Row>
                <Col md={9}>
                    <Row>
                    <Icon><HomeIcon/></Icon>
                    <Icon><Add /></Icon>
                    <Icon><Edit /></Icon>
                    <Icon><View /></Icon>
                    </Row>
                </Col>
                <Col md={2}>
                    <UserName>[User-Name]</UserName>
                </Col>
                <Col md={1}>
                    <Person />
                </Col>
                    
            </Row>
            </Menu>
        )
    }
}

export default TopMenu

/*
<HomeIcon />
                    <Link to="/NewHome">
                        <StyledLink>
                            <AccountLink>Home</AccountLink>
                        </StyledLink>
                    </Link>
                    <AccountIcon /> 
                    <Link to="/Accounts">
                        <StyledLink>
                            <AccountLink>Accounts</AccountLink>
                        </StyledLink>
                    </Link>
 */