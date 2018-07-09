import React, { Component } from 'react'

export default class RightArrow extends Component {
  render() {
    return (
        <div className="backArrow" onClick={this.props.right}>
            <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
        </div>
    )
  }
}
