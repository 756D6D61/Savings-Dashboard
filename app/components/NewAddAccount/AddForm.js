import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Form = styled.form`
    margin-left:7%;
`

const Label = styled.label`
    margin-left:10%;
    font-family: Helvetica Neue;
    font-size: 30px;
    text-align:center;
    font-weight:500;
    color: #96CDEF;
`
const Input = styled.input`
    margin-left:10%;
    width:30vw;
    height: 7vh;
    border-radius: 10px;
    border: transparent;
    color: #96CDEF;
    background: #A5A5A5;
    margin-bottom: 30px;
    padding: 10px;
    font-weight: 200;
`
const Button = styled.button`
    background:#A5A5A5;
    width:100px;
    height:50px;
    color: #96CDEF;
    border-radius: 10px;
    border: transparent;
    font-weight:500;
    font-size:22px;
    margin-left:50%;
`
const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 50px;
    text-align:center;
    font-weight:600;
    margin-top:5px;
    color: #96CDEF;
    margin-left:-7%;
`

class AddForm extends Component{
    render(){
        return(
            <Form>
                <Title>Add New Account</Title>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Name
                            </Label>
                        </Col>  
                        <Col md={10}>
                            <Input type="text" name="name"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Category
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Goals
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Interest
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name"/>
                        </Col>    
                    </Row>
                    <Button>Add</Button>
                </Form>
        )
    }
}

export default AddForm