import React, {Component} from 'react';
import ProfileImg from '../../img/img.jpg';

class UserProfile extends Component {

    render() {
        return (
            <div className="profile clearfix">
                <div className="profile_pic">
                    <img src={ProfileImg} alt="..." className="img-circle profile_img"/>
                </div>
                <div className="profile_info">
                    <span>Bem vindo,</span>
                    <h2>Tadeu Quina</h2>
                </div>
            </div>
        );
    }
}

export default UserProfile;