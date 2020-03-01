import React from 'react';
import './App.css';
import firebase from '../firebase'
import {Button} from 'semantic-ui-react'

function App() {
  const signOut = () => firebase.auth().signOut()
  return (
    <div className="App">
        <Button onClick={() => signOut()}>Signout</Button>
    </div>
  );
}

export default App;
