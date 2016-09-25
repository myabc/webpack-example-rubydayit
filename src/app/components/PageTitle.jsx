var Radium = require('radium');
var Style = Radium.Style;
var React = require('react');

var PageTitle = React.createClass({
  propTypes: {
    id:              React.PropTypes.string,
    highlightColor:  React.PropTypes.string.isRequired
  },

  render: function() {
    var customStyle = {
      "backgroundColor": this.props.highlightColor
    };

    return (
      <header style={customStyle}>
        <h1>Webpack <em>Example</em></h1>
        <h2>at RubyDay Italia</h2>
      </header>
    );
  }
});

module.exports = PageTitle;
