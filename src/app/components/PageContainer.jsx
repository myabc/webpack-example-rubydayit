var React = require('react');
var PageTitle = require('./PageTitle');

var PageContainer = React.createClass({
  render: function(){
    return (
      <div style={styles.container}>
        <PageTitle highlightColor="#ffc" />
      </div>
    );
  }
});

var styles = {
  container: {
    width: '80%'
  }
};

module.exports = PageContainer;
