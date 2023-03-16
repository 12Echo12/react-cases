import React, { Component } from 'react'
import subscribeCenter from '../../subscribeCenter'
import './index.css'

export default class FilmDetail extends Component {
    componentWillMount() {
        this.state = {
            value: "",
        }
        subscribeCenter.subscribe((value) => {
            this.setState({
                value
            })
        })
    }
  render() {
    return (
        <div className="detail">
            {this.state.value}
       </div>
    )
  }
}
