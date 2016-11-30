import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import AppRoot from './components/AppRoot';

render(
  <AppContainer>
    <AppRoot />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./components/AppRoot', () => {
    render(
      <AppContainer>
        <AppRoot />
      </AppContainer>,
      document.getElementById('app')
    );
  })
}
