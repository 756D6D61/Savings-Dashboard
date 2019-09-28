import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    height: 75.5vh;
    width: 35vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top: 15px;
    margin-left:-10px;
`

class Graph extends Component{
    render(){
        return(
            <Content>
                graph
            </Content>
        )
    }
}

export default Graph