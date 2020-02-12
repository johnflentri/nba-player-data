import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (<div className="component-section-header">
      <div className="title-badge">
        <h2>{this.props.titlebadge}</h2>
      </div>
    </div>);
  }
}