import React, { Component } from 'react'
import './style.css';
import data from '../../assets/data.json'
import Thumbnail from '../thumbnail'

export default class NavUser extends Component {
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

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        // }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    ReadData() {
        console.log('data', data);
        console.log('data', data.users[0]);
    }

    render() {
        this.ReadData();
        return (
            <div className="navUser">
                <Thumbnail
                    user={data.users[0]}
                />
                <Thumbnail
                    user={data.users[1]}
                />
                <Thumbnail
                    user={data.users[2]}
                />
            </div>
        );
    }
}
