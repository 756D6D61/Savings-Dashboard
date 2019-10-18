import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Form = styled.form`
    margin-top:10%;
`
const Label = styled.label`
    margin-left:10%;
    font-family: Helvetica Neue;
    font-size: 30px;
    text-align:center;
    font-weight:500;
    color: #FFE36C;
`
const Input = styled.input`
    margin-left:10%;
    width:50vw;
    height: 7vh;
    border-radius: 10px;
    border: transparent;
    color: #FFE36C;
    background: #A5A5A5;
    margin-bottom: 30px;
    padding: 10px;
    font-weight: 200;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #FFE36C;
        font-size:25px;
        padding:5px;
  }
`
const Button = styled.button`
    background:#A5A5A5;
    width:100px;
    height:50px;
    color: #FFE36C;
    border-radius: 10px;
    border: transparent;
    font-weight:500;
    font-size:22px;
    margin-left:50%;
`


class EditAccount extends Component{
    render(){
        return(
            <div>
                <Form>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Name
                            </Label>
                        </Col>  
                        <Col md={10}>
                            <Input type="text" name="name" placeholder="HSBC Super Saver"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Category
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name" placeholder="General"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Goals
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name" placeholder="£10,201"/>
                        </Col>    
                    </Row>
                    <Row>
                        <Col md={2}>
                            <Label>
                                Interest
                            </Label>
                        </Col>
                        <Col md={10}>
                            <Input type="text" name="name" placeholder="0.05%"/>
                        </Col>    
                    </Row>
                    <Button>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default EditAccount