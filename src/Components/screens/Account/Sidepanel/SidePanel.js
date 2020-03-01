import React from 'react'
import {Menu} from 'semantic-ui-react'
import UserPanel from './UserPanel'
import NavBarContainer from '../../../Containers/NavBarContainer'
class SidePanel extends React.Component{
    render(){
        const {currentUser} = this.props
        return(
            <Menu
                size="large"
                inverted
                vertical
                style={{fontSize:"1.2rem"}}
                className="menu-sidepanel"
            >   
                <UserPanel currentUser={currentUser}/>
                <NavBarContainer/>
            </Menu>
        )
    }
}

export default SidePanel