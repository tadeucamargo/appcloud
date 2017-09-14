import React, {Component} from 'react';

//Components
import AppTitle from './AppTitle';
import UserProfile from './UserProfile';
import Navigation from './navigation/Navigation';
import MenuFooter from './MenuFooter';

class SideBar extends Component { 

    render() {
        return (
            <div className="col-md-3 left_col">
                <div className="left_col scroll-view">
                    <AppTitle title="App Cloud"/>
                    <div className="clearfix"></div>
                    <UserProfile />
                    <br/>
                    <Navigation />
                    <MenuFooter />
                </div>
            </div>  
        )
    }
}

export default SideBar;


