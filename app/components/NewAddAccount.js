import React, { Component } from 'react'
import TopMenu from './NewAccountPage/TopMenu'
import AddContainer from './NewAddAccount/AddAccountContainer'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const TopBar = styled.div`
    z-index: 999;
    background: #A5A5A5;
    margin-top:2%;
    width:100%;
`

class Accounts extends Component{
    render(){
        return(
            <div>
                <Row>
                    <TopBar>
                        <Col md={12}>
                            <TopMenu />
                        </Col>
                    </TopBar>
                </Row>

                
                <Row>
                    <Col>
                        <AddContainer />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Accounts
