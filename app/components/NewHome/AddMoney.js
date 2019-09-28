import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Menu = styled.div`
    height: 40vh;
    width: 20vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
`

class AddMoney extends Component{
    render(){
        return(
            <div>
                <Menu>
                    Add Money
                </Menu>
            </div>
        )
    }
}

export default AddMoney