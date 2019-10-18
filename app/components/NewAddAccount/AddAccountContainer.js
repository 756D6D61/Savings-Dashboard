import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Form from './AddForm'
import Image from './AddImage'
import styled from 'styled-components'

const AddAccount = styled.div`
   
`
const Left = styled.div`
    background: #000;
    height: 110vh;
    width:50vw; 
    margin-top:-110px;
    padding-top:150px;
`
const Right = styled.div`
    background: #393939;
   
    margin-top: -800px;
    float:right;
    padding-top:150px;
    width:50vw;
`

class AccountContainer extends Component{
    render(){
        return(
            <AddAccount>
                    <Left>
                        <Form />
                    </Left>
                    <Right>
                       <Image />
                    </Right>
            </AddAccount>
        )
    }
}

export default AccountContainer