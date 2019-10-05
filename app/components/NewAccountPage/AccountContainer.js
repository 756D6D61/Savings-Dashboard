import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SideAccounts from './SideAccounts'
import EditAccountDetails from './EditAccountDetails'
import ViewAccountDetails from './ViewAccountDetails'
import styled from 'styled-components'
import Edit from '../Images/edit.svg'
import Add from '../Images/add.svg'

const Account = styled.div`
    height: 90vh;
    width: 92.90vw;
    margin-left:75px;
    margin-top:40px
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

const Button = styled.button`
    width:20vw;
    height:15vh;
    color: #5202FA
    background: white;
    border: transparent;
    padding:5px;
    border-radius:10px;
    margin-left:5%
    margin-top:5%;
`
const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align:center;
    font-weight:500;
    margin-top:5px;
`
const DetailsLeft = styled.p`
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align:left;
    font-weight:200;
    margin-top:-15px;
`
const DetailsRight = styled.p`
    font-family: Helvetica Neue;
    font-size: 20px;
    text-align:right;
    font-weight:200;
    margin-top:-15px;
`

const EditIcon = styled.p`
    margin-left:310px;
    margin-top: -70px;
`

class AccountContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            childVisible: false,
            childVisible1: false
        }
    }
   onClick() {
       this.setState({
           childVisible: !this.state.childVisible, 
       })
   }
   onClick1() {
    this.setState({
        childVisible1: !this.state.childVisible1
    })
}
    render(){
        return(
            <Account>
                    <Left>
                    <Button onClick={() => this.onClick()}>
                        <Row>
                            <Col>
                            <Title>HSBC Super Saver</Title></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Goal</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>£10,203</DetailsRight></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Category</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>General</DetailsRight></Col>
                            </Row>
                        </Button>
                        <EditIcon onClick={() => this.onClick1()}><Edit /></EditIcon>
                        <Button onClick={() => this.onClick()}>
                        <Row>
                            <Col>
                            <Title>RBS Savings</Title></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Goal</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>£1,101</DetailsRight></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Category</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>Birthday</DetailsRight></Col>
                        </Row>
                        </Button>
                        <EditIcon onClick={() => this.onClick1()}><Edit /></EditIcon>
                        <Button onClick={() => this.onClick()}>
                        <Row>
                            <Col>
                            <Title>Santander Savings</Title></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Goal</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>£3,763</DetailsRight></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Category</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>Holiday</DetailsRight></Col>
                            </Row>
                        </Button>
                        <EditIcon onClick={() => this.onClick1()}><Edit /></EditIcon>
                        <Button onClick={() => this.onClick()}>
                        <Row>
                            <Col>
                            <Title>ISA Cash</Title></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Goal</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>£20,101</DetailsRight></Col>
                            </Row>
                            <Row>
                            <Col md={6}><DetailsLeft>Category</DetailsLeft></Col>
                            <Col md={6}><DetailsRight>General</DetailsRight></Col>
                            </Row>
                        </Button>
                        <EditIcon onClick={() => this.onClick1()}><Edit /></EditIcon>
                        <Button onClick={() => this.onClick()}>test 5</Button>
                            <SideAccounts onClick={() => this.onClick()}/>
                        <Button onClick={() => this.onClick()}>test</Button>
                        <SideAccounts />
                        <SideAccounts />
                        </Left>
                    <Right>
                        {this.state.childVisible ? (
                            <ViewAccountDetails />
                        ):null}
                        {this.state.childVisible1 ? (
                            <EditAccountDetails />
                        ):null}
                    </Right>
            </Account>
        )
    }
}

export default AccountContainer

