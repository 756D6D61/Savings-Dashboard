import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Test from './components/test'
import LogIn from './components/logIn'
import SignUp from './components/signUp'
import Home from './components/home'
import NewAccount from './components/newAccount'
import ViewAccount from './components/viewAccount'
import NewHome from './components/NewHome'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store';

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={LogIn} />
                    <Route exact path='/SignUp' component={SignUp} />
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/NewAccount' component={NewAccount} />
                    <Route exact path='/ViewAccount' component={ViewAccount} />
                    <Route exact path='/NewHome' component={NewHome} />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Provider store={configureStore()}><App /></Provider>, document.getElementById('app'))
