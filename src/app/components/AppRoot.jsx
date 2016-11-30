import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';

import PageContainer from './PageContainer';

export default class AppRoot extends Component {
  render() {
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
}
