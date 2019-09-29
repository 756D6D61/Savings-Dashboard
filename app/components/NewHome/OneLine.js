import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    height: 10vh;
    width: 62vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    font-size:40px;
`
const Text = styled.div`
    color:#5202FA;
    margin-left:1.5vw;
    margin-bottom: 5px;
    padding:5px;
    font-weight:200;
`
const Bold = styled.b`
    font-weight:600;
`

class OneLine extends Component{
    render(){
        return(
            <Content>
                <Text>You have saved <Bold>£40,023</Bold> during <Bold><u>January 2019</u></Bold></Text>
            </Content>
        )
    }
}

export default OneLine