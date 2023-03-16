import React, { Component } from 'react'
import subscribeCenter from '../subscribeCenter'

export default class Subscribe extends Component {
    componentWillMount() {
        this.state = {
            cinemaList: [
                {
                    name: '1',
                    detail :'1111111111',
                },
                {
                    name: '2',
                    detail: '2111111111',
                },
                {
                    name: '3',
                    detail: '3111111111',
                },
                {
                    name: '4',
                    detail: '4111111111',
                },
                {
                    name: '5',
                    detail: '5111111111',
                },
                {
                    name: '6',
                    detail: '6111111111',
                },
                {
                    name: '7',
                    detail: '7111111111',
                }
            ]
        }
    }
   render() {
       return (
    <div>
            {this.state.cinemaList.map(item => {
                return (
                    <button onClick={() => {
                        subscribeCenter.publish(item.detail);
                    }}>
                        {item.name}
                    </button>
                )
            })}
    </div>
    )
  }
}

