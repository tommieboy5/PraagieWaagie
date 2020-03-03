import React from 'react'
import firebase from '../../../../firebase'

import {Grid, Header, Icon, Image, Button, Input, Message} from 'semantic-ui-react'
import {Link, useHistory} from 'react-router-dom'

class UserPanel extends React.Component{
    state={
        user:firebase.auth().currentUser,
        usersRef:firebase.database().ref("users"),
        storageRef: firebase.storage().ref(),
    }

    render(){
        const{
            user,
            currentUser,
            history
        } = this.state

        return(
            <Grid>
                <Grid.Column>
                    <Grid.Row style={{paddingTop:"1.2em"}}>
                        <Header inverted floated="left">
                            <Link className="no" to="/"><Icon name="arrow left"/></Link>
                            <Header.Content>User Settings</Header.Content>
                        </Header>
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel