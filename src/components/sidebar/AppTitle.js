import React, {Component} from 'react';
import {Icon} from 'react-fa';

class AppTitle extends Component {

    render() {
        return (
            <div className="navbar nav_title" style={{border:0}}>
                <a href="index.html" className="site_title">
                    <Icon name='cloud' />
                    <span>{this.props.title}</span>
                </a>
            </div>
        );
    }

}

export default AppTitle;