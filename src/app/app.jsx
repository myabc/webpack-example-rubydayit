'use strict';
var Radium = require('radium');
var Style = Radium.Style;
var React = require('react'),
  ExampleApp;

var PageContainer = require('./components/PageContainer');

ExampleApp = React.createClass({
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

var rootInstance = React.render(
    <ExampleApp />,
    document.getElementById('app')
);

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
