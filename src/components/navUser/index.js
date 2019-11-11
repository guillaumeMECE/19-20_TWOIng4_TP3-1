import React, { Component } from 'react'
import './style.css';
import data from '../../assets/data.json'
import Thumbnail from '../thumbnail'
import Profil from '../profil'

export default class NavUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: 0
        };
    }

    changeFocus(id) {
        this.setState({ focus: id })
    }

    renderUsers(user) {
        const result = <Thumbnail user={user} onClick={() => this.changeFocus(user.id)} />;
        return result;
    }

    render() {
        let usersList = data.users.map((user) => this.renderUsers(user))
        console.log('usersList: ', usersList);

        return (
            <div className="navUser">
                <div className="navbarUser">
                    {usersList}
                </div>
                <Profil user={data.users[this.state.focus]} />
                <Thumbnail key={data.users[1].id} user={data.users[1]} onClick={() => this.changeFocus(data.users[1].id)} />;
            </div>
        );
    }
}
