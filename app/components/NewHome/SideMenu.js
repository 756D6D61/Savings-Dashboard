import React, { Component } from 'react'
import styled from 'styled-components'
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    render(){
        return(
            <Menu>
                test
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
                <Image onClick={this.toggle}/>
                <UserName>User Name</UserName>
                <HR />
                <Links>
                    <Home>
                        <HomeIcon style={{fontSize: '130%'}}/>Home
                    </Home>
                    <Account>
                        <AccountIcon style={{fontSize: '130%'}}/>
                            <Link to="/Accounts">
                            <StyledLink>
                                <AccountLink>Accounts</AccountLink>
                            </StyledLink>
                            </Link>
                    </Account>
                </Links>
            </Menu>
        )
    }
}

export default SideMenu
