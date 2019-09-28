import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Button } from 'reactstrap'
import styled from 'styled-components'

const Money = styled.div`
    height: 40vh;
    width: 20vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
    padding: 5px;
`
const Title = styled.p`
    font-family: Helvetica Neue;
    font-size: 30px;
    text-align:center;
    font-weight:500;
`
const dropdown = styled.div`
    height: 10vh;
    width: 10vw;
    background:#F7F7F7;
    color:#5202FA;
    border-radius:20px;
`
const Name = styled.a`
    font-weight:300;
`
class AddMoney extends Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render(){
        return(
                <Money>
                    <Title>Add Money</Title>
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                            <Name>Name of Account</Name>
                        </DropdownToggle>
                        <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Some Action</DropdownItem>
                        <DropdownItem disabled>Action (disabled)</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <br />
                    <Input
                        type="text"
                        name="amount"
                        placeholder="Amount"
                    />
                    <br />
                    <Input
                        type="date"
                        name="date"
                        placeholder="date placeholder"
                    />
                    <Button className="add">Add</Button>
                </Money>
        )
    }
}

export default AddMoney