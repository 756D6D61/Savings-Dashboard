import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    height: 10vh;
    width: 62vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
`

class OneLine extends Component{
    render(){
        return(
            <Content>
                one line
            </Content>
        )
    }
}

export default OneLine