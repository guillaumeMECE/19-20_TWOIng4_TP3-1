import React, { Component } from 'react'
import './style.css';
import data from '../../assets/data.json'
import Thumbnail from '../thumbnail'
import Profil from '../profil'

export default class NavUser extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    renderUsers(user) {
        return <Thumbnail key={user.id} user={user} />;
    }

    render() {
        let usersList = data.users.map(this.renderUsers)

        return (
            <div className="navUser">
                <div className="navbarUser">
                    {usersList}
                </div>
                <Profil user={data.users[0]} />
            </div>
        );
    }
}
