import React, { Component } from 'react'
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import styled from 'styled-components'
import Person from '@material-ui/icons/Person';

const UserName = styled.p`
    color:#9B9B9B;
    font-family: Helvetica Neue;
    font-size: 45px;
    text-align:left;
    font-weight:500;
`

const Icon = styled.p`
    color:#9B9B9B;
    font-size: 45px;
    text-align:left;
    font-weight:500;
    margin-top:-1vh;
`

class Welcome extends Component{
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
            <Row>
                <Col md={11}>
                    <UserName>Welcome, User Name</UserName>
                </Col>
                <Col md={1}>
                    <Icon><Person style={{fontSize: '130%'}} onClick={this.toggle}/></Icon>
                </Col>
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
            </Row>
        )
    }
}

export default Welcome