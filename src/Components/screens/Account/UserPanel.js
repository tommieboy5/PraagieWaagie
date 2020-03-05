import React from 'react'
import firebase from '../../../firebase'

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
                        <Icon name="sign-out" classname="sign_out_icon" size="large"/>
                    </Grid.Row>
                    <React.Fragment>
                        <Grid.Row className="avatar-grid">
                            <Grid.Column>
                                <Image
                                    src={user.photoURL}
                                    size="small"
                                    wrapped
                                />
                            </Grid.Column>
                        </Grid.Row>
                    </React.Fragment>
                </Grid.Column>
            </Grid>
        )
    }
}

export default UserPanel