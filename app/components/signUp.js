import React, { Component } from 'react';
import Form from './SignUp/form'
import People from './Images/people.svg'
import { Container, Row, Col, Button } from 'reactstrap'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class SignUp extends Component{
    render(){
        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        return(
            <div className="auth">
                        <h1 className="logIn">Sign Up</h1>
                        <hr />
                        <Row>
                        <Col md={2}></Col>
                        <Col md={8}><Form />      
                        <br />
                        <Button onClick={signInWithGoogle}>Sign in with Google</Button>
                        </Col>
                        <Col md={2}></Col>
                        </Row>
                        <div className="image">
                            <People width="110vw"/>
                        </div>
            </div>
            
        )
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(SignUp);