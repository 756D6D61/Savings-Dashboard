import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/HomeOutlined';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'
import Add from '@material-ui/icons/QueueOutlined';
import Edit from '@material-ui/icons/BorderColorOutlined';
import View from '@material-ui/icons/VisibilityOutlined';
import {Row, Col} from 'reactstrap'

const Menu = styled.div`
    height: 100vh;
    width: 100%;
    background:#393939
    color:white;
    padding-top: 30%;
`
const Image = styled.div`
    height: 175px;
    width: 175px;
    background: white;
    border-radius: 10px; 
    margin: 10%;
`
const HR = styled.hr`
    background-color:white;
    margin:10px;
`
const Links = styled.div`
    text-align: left;
    font-size:25px;
    margin-left:2vw;
    font-family: Source Code Pro;
`
const Home = styled.div`
    text-decoration: none;
    font-weight:200;
    padding: 10px;
`
const Account = styled.p`
    margin-top: -2vh;
    font-weight:200;
`
const AccountLink = styled.p`
    margin-top: -4.5vh;
    text-align: left;
    margin-left:1.25vw;
`
const StyledLink = styled(
    styled(AccountLink)`
      color: white;
      &:hover {
        text-decoration: underline;
      }
    `,
    'active'
  )`
    color: white;
  `;
class SideMenu extends Component{
    
    render(){
        return(
            <Menu>
                <br />
                
                <Image />
                <HR />
                <Links>
                <Row>
                <Col md={2}>
                        <Home><HomeIcon /></Home>
                        <Home><Add /></Home>
                        <Home><Edit /></Home>
                        <Home><View /></Home>
                </Col>
                <Col md={10}>
                        <Home>Home</Home>
                        <Home>Add</Home>
                        <Home>Edit</Home> 
                        <Home>View</Home>
                </Col>
                </Row>
                </Links>
                
            </Menu>
        )
    }
}

export default SideMenu
/*
<Account>
                        <AccountIcon style={{fontSize: '130%'}}/>
                            <Link to="/Accounts">
                            <StyledLink>
                                <AccountLink>Accounts</AccountLink>
                            </StyledLink>
                            </Link>
                    </Account>
 */

 /*
 <Row>
                    <Col md={2}>
                        <HomeIcon />
                        <Add />
                        <Edit />
                        <View />
                    </Col>
                    <Col md={10}>
                        <Home>Home</Home>
                        <Home>Add</Home>
                        <Home>Edit</Home> 
                        <Home>View</Home>
                    </Col>
                </Row> */
/*
<Home>
                        <HomeIcon style={{fontSize: '130%'}}/> Home
                    </Home>
                    <Home>
                        <Add /> Add
                    </Home>
                    <Home>
                        <Edit /> Edit
                    </Home>
                    <Home>
                        <View /> View
                    </Home>

 */