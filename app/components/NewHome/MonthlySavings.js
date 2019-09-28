import React, { Component } from 'react'
import styled from 'styled-components'

const Content = styled.div`
    height: 75.5vh;
    width: 25vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top: 15px;
    margin-left:-100px;
`

class MonthlySavings extends Component{
    render(){
        return(
            <Content>
                monthly savings
            </Content>
        )
    }
}

export default MonthlySavings