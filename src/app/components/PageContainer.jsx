import React, { Component, PropTypes } from 'react';

import PageTitle from './PageTitle';

export default class PageContainer extends Component {
  render(){
    return (
      <div style={styles.container}>
        <PageTitle highlightColor="#ffc" />
      </div>
    );
  }
}

const styles = {
  container: {
    width: '80%'
  }
};
