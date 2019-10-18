import React, { Component } from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'

const Content = styled.div`
    height: 45vh;
    width: 20vw;
    background:#A5A5A5;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top:20px;
`
const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 30px;
    text-align:center;
    font-weight:500;
    font-family: Source Code Pro;
    color: #FFE36C;
`
const ButtonStyle = styled.div`
    margin-bottom:20px;
`
class Categories extends Component{
    render(){
        return(
                <Content>
                    <Title>Categories</Title>
                    <ButtonStyle><Button className="category">General</Button></ButtonStyle>
                    <ButtonStyle><Button className="category">Birthday</Button></ButtonStyle>
                    <ButtonStyle><Button className="category">Holiday</Button></ButtonStyle>
                    <ButtonStyle><Button className="category">Wedding</Button></ButtonStyle>
                </Content>
        )
    }
}

export default Categories