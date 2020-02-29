import React from 'react'
import firebase from '../firebase'
import {Button} from 'semantic-ui-react'
export default class Login extends React.Component{
    state = {
        user: firebase.auth().currentUser,
        provider: new firebase.auth.GoogleAuthProvider()
    }

    logInGoogle= ()=>{
        firebase.auth().signInWithRedirect(this.state.provider)
        .then((result) =>{
            if(result.credential){
                const token = result.credential.accessToken
                console.log(result)
            }   
        })
    }


    render(){
        return(
            <Button onClick={this.logInGoogle}>Login with google</Button>
        )
    }
}