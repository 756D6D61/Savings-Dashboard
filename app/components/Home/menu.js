import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import HomeIcon from '@material-ui/icons/Home'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Head from '../Images/head.svg'
import { Link } from 'react-router-dom'

class Menu extends Component{
    render(){
        return(
            <div className="menu-back">
                <Row>
                    <Col md={2}></Col>
                    <Col md={1}><Link to="/Home"><HomeIcon/></Link></Col>
                    <Col md={1}> <Link to="/NewAccount"><AddBoxIcon /></Link></Col>
                    <Col md={6}></Col>
                    <Col md={2}><Head height='40px'/>Welcome, user</Col>
                <div className="menu"></div>
                </Row>  
            </div>      
           
        )
    }
}

export default Menu;