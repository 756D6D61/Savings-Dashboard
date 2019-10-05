import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Form from './AddForm'
import Image from './AddImage'
import styled from 'styled-components'

const AddAccount = styled.div`
    height: 90vh;
    width: 92.90vw;
    margin-left:75px;
    margin-top:40px
`
const Left = styled.div`
    background: #F7F7F7;
    border-top-left-radius:20px;
    height: 90vh;
    width:50vw;
   
`
const Right = styled.div`
    background: #EAEAEA;
    width:50vw;
    height: 90vh;
    margin-top: -659px;
    margin-right: -102px;
    z-index:999;
    float:right;
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