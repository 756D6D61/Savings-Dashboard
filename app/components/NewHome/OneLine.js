import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    height: 10vh;
    width: 62vw;
    background:#A5A5A5;
    color:#5202FA;
    border-radius:20px;
    font-size:33px;
    margin-top: 10px;
`
const Text = styled.div`
    color:#FFB9BB;
    margin-left:1.5vw;
    padding:5px;
    font-weight:200;
    font-family: Source Code Pro;
`
const Bold = styled.b`
    font-weight:600;
    font-family: Source Code Pro;
`

class OneLine extends Component{
    render(){
        return(
            <Content>
                <Text>You have saved a total of <Bold>£40,023</Bold></Text>
            </Content>
        )
    }
}

export default OneLine