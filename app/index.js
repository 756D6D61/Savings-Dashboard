import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './components/test'
import LogIn from './components/login'
class App extends React.Component{
    render(){
        return(
            <div>
                Hello World
                <Test />
                <LogIn />
                </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
