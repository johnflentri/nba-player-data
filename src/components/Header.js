import React, { Component } from "react";
export default class Header extends Component {
  render() {
    return (<div className="component-section-header">
      <div className="title-badge">
        <div className="title-badge-title"><p>{this.props.titlebadge}</p></div>
      </div>
      <h2>
        <div className="component-title">
          <p>{this.props.middle}</p>
        </div>
      </h2>
      <div className="description">
        {this.props.content.description}    </div>
    </div>);
  }
}