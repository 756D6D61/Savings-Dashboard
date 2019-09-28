import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
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
    render(){
        return(
            <Row>
                <Col md={11}>
                    <UserName>Welcome, User Name</UserName>
                </Col>
                <Col md={1}>
                    <Icon><Person style={{fontSize: '130%'}}/></Icon>
                </Col>
            </Row>
        )
    }
}

export default Welcome