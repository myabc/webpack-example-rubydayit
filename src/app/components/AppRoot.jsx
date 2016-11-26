var React = require('react');

var Radium = require('radium');
var Style = Radium.Style;

var PageContainer = require('./PageContainer');

var AppRoot = React.createClass({
  componentWillMount: function(){
  },

  componentWillUnmount: function(){
  },

  render: function() {
    return (
        <div>
          <Style rules={{
            body: {
              backgroundColor : '#eee',
              fontFamily:       'sans-serif'
            }
          }} />
          <PageContainer></PageContainer>
        </div>
    );
  }
});

module.exports = AppRoot;
