import React, { Component } from 'react'
import './style.css';

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderUsers(user) {
        // return <Thumbnail key={user.id} user={user} />;
    }

    render() {
        // let usersList = data.users.map(this.renderUsers)

        return (
            <div className="profil">
                <img className="profil_img"
                    src={process.env.PUBLIC_URL + this.props.user.img}
                    alt={this.props.user.name} />

                <div className="profil_info">
                    <div className="profil_info_txt">
                        {this.props.user.firstname}
                    </div>
                    <div className="profil_info_txt">
                        {this.props.user.lastname}
                    </div>
                    <div className="profil_info_txt">
                        {this.props.user.birthdate}
                    </div>
                </div>
            </div>
        );
    }
}
