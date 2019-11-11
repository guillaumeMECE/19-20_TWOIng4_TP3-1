import React, { Component } from 'react'
import './style.css';
import data from '../../assets/data.json'
import Thumbnail from '../thumbnail'
import Profil from '../profil'
import Publication from '../publication'

export default class NavUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: data.users[0]
        };
    }

    changeFocus(user) {
        this.setState({ focus: user })
    }

    renderUsers(user) {
        return <Thumbnail user={user} onClick={() => this.changeFocus(user)} />;
    }

    renderPublications(publication) {
        return <Publication publication={publication} />;
    }

    render() {
        let usersList = data.users.map((user) => this.renderUsers(user))
        console.log('usersList: ', usersList);
        let publicationsList = this.state.focus.feed.map((publication) => this.renderPublications(publication))
        console.log('usersList: ', publicationsList);

        return (
            <div className="navUser">
                <div className="navbarUser">
                    {usersList}
                </div>
                <Profil user={this.state.focus} />
                {publicationsList}
            </div>
        );
    }
}
