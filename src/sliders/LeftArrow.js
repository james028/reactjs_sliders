import React, { Component } from 'react'

export default class LeftArrow extends Component {
  render() {
    return (
        <div className="backArrow" onClick={this.props.left}>
            <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
        </div>
    )
  }
}
