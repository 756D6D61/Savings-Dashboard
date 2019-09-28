import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'

const Menu = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(#5400FA, #0092FF);
    color:white;
`
const Image = styled.div`
    height: 175px;
    width: 175px;
    background: white;
    border-radius: 10px; 
    margin: 10%;
`
const UserName = styled.p`
    color:white;
    font-family: Helvetica Neue;
    font-size: 35px;
    text-align:center;
`
const HR = styled.hr`
    background-color:white;
    margin:10px;
`
const Links = styled.div`
    text-align: left;
    font-size:25px;
    margin-left:2vw;
    
`
const Home = styled.p`
    text-decoration: none;
    border-bottom: 8px solid white;
`
const Account = styled.p`
    margin-top: -2vh;
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
                test
                <Image />
                <UserName>User Name</UserName>
                <HR />
                <Links>
                    <Home>
                        <HomeIcon style={{fontSize: '130%'}}/>Home
                    </Home>
                    <Account>
                        <AccountIcon style={{fontSize: '130%'}}/>
                        
                            <Link to="/Accounts">
                            <StyledLink><AccountLink>Accounts</AccountLink></StyledLink>
                            </Link>
                    </Account>
                </Links>
            </Menu>
        )
    }
}

export default SideMenu
