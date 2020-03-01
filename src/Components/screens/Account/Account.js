import React from 'react'
import {Grid} from 'semantic-ui-react'
import '../../App.css'
import {connect} from 'react-redux'
import SidePanel from './Sidepanel/SidePanel'

const Account = ({currentUser}) =>(
    <Grid columns="equal" className="app">
        <SidePanel key={currentUser && currentUser.uid} currentUser={currentUser}/>
    </Grid>
)

const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect (mapStateToProps)(Account)