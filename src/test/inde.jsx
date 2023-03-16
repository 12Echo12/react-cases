import React, { Component } from 'react'

export default class Demo extends Component {
    state = {
        cnt: 0,
    }
    handle = () => {
        this.setState({
            cnt : this.state.cnt + 2,
        })
        this.setState({
            cnt: this.state.cnt + 1,
        })
    }
    render() { 
    return (
        <div>
            {this.state.cnt}
        <button onClick={this.handle}>点击</button>
      </div>
    )
  }
}
