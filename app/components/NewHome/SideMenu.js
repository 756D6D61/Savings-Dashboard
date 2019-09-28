import React, { Component } from 'react'
import styled from 'styled-components'

const Menu = styled.div`
    height: 100vh;
    width: 100%;
    background:red; 
    color:white;
`

class SideMenu extends Component{
    render(){
        return(
            <Menu>
                Menu
            </Menu>
        )
    }
}

export default SideMenu
