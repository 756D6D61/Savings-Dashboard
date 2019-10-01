import React, { Component } from 'react'
import ViewAccountDetails from './ViewAccountDetails'
class SideAccounts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            childVisible: true
        }
    }
   onClick() {
       this.setState({
           childVisible: !this.state.childVisible
       })
   }
    render(){
        return(
            <div>
                side accounts - make scrollable
                <button onClick={() => this.onClick()}>test</button>
                {this.state.childVisible ? (
                    <ViewAccountDetails />
                ):null}
            </div>
        )
    }
}

export default SideAccounts