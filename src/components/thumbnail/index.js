import React, { Component } from 'react'
import './style.css';

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    render() {

        return (
            <div className="thumbnail" >
                <div className="thumbnail_img">

                </div>
                <div className="thumbnail_txt">
                    Guillaume
                </div>

            </div>
        );
    }
}
