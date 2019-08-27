import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import HomeIcon from '@material-ui/icons/Home'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Head from '../Images/head.svg'

class Menu extends Component{
    render(){
        return(
            <div className="menu-back">
            <Container>
                <Row>
                    <Col md={1}><HomeIcon/></Col>
                    <Col md={1}> <AddBoxIcon /></Col>
                    <Col md={8}></Col>
                    <Col md={2} ><Head  height='40px'/>Welcome, user</Col>
                <div className="menu"></div>
                </Row>  
            </Container>
            </div>      
           
        )
    }
}

export default Menu;