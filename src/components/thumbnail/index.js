import React, { Component } from 'react'
import './style.css';

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '../../assets/img/default.png',
        };
    }

    render() {
        console.log('props', this.props.user);

        return (
            <div className="thumbnail" >
                <div className="thumbnail_imgBox">
                    <img className="thumbnail_img" src={process.env.PUBLIC_URL + this.props.user.img} alt="Default" />
                </div>
                <div className="thumbnail_txt">
                    {this.props.user.name}
                </div>

            </div>
        );
    }
};
Thumbnail.defaultProps = {
    user: {
        name: 'Default',
        imgLocal: '../../assets/img/default.png'
    }
};