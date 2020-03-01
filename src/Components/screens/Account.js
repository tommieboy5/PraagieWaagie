import React from 'react'
import NavBarContainer from '../Containers/NavBarContainer'
import '../App.css'
import firebase from '../../firebase'
import {Button} from 'semantic-ui-react'
export default class Account extends React.Component{
    handleSignout = () =>{
        firebase
            .auth()
            .signOut()
    }
    render(){
        return(
            <div className="app">
                <p>Hallo</p>
                <Button onClick={this.handleSignout}>Signout</Button>
                <NavBarContainer/>
            </div>
        )
    }
}