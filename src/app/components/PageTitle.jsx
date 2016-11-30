import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';

export default class PageTitle extends Component {
  render() {
    const customStyle = {
      "backgroundColor": this.props.highlightColor
    };

    return (
      <header style={customStyle}>
        <h1>Webpack <em>Example</em></h1>
        <h2>at RubyDay Italia</h2>
      </header>
    );
  }
}

PageTitle.propTypes = {
  id:              PropTypes.string,
  highlightColor:  PropTypes.string.isRequired
}
