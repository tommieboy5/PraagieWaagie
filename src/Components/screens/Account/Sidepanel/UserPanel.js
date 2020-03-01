import React from 'react'
import firebase from '../../../../firebase'

import {Grid, Header, Icon, Image, Button, Input, Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class UserPanel extends React.Component{
    state={
        user:firebase.auth().currentUser,
        usersRef:firebase.database().ref("users"),
        storageRef: firebase.storage().ref()
    }


    render(){
        const{
            user,
            currentUser
        } = this.state

        return(
            <Grid>
                <Grid.Column>
                    <Grid.Row style={{padding:"1.2em", margin:0}}>
                        <Header inverted floated="left">
                            <Icon name="arrow left"/>
                            <Header.Content>User Settings</Header.Content>
                        </Header>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel