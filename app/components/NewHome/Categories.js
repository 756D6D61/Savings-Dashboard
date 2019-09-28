import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Content = styled.div`
    height: 45vh;
    width: 20vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
    margin-top:20px;
`

class Categories extends Component{
    render(){
        return(
                <Content>
                    Categories
                </Content>
        )
    }
}

export default Categories