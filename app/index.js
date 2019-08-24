import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Test from './components/test'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import Home from './components/home'


class App extends React.Component{
    render(){
        return(
            <div>
                Hello World
                <Test />
                <LogIn />
                <SignUp />
                <Home />
                </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))
