import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'
import { Row, Col } from 'reactstrap'

const Menu = styled.div`
    color:#ADADAD;
    margin-left: 7%;
    margin-top: 2%;
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
class TopMenu extends Component{
    render(){
        return(
            <Menu>
            <Row>
                <Col md={10}>
                    <Row>
                    <HomeIcon />
                    <AccountIcon /> 
                    <Link to="/Accounts">
                        <StyledLink>
                            <AccountLink>Accounts</AccountLink>
                        </StyledLink>
                    </Link>
                    </Row>
                    
                </Col>
                <Row>
                    <Col md={2}><Circle /> </Col><Col>User</Col>
                </Row>
            </Row>
            </Menu>
        )
    }
}

export default TopMenu