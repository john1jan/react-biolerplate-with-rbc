import React from 'react';
const ErrorPageContainer = require('../containers/errorPage/ErrorPageContainer');
const MErrorPageContainer = require('../containers/errorPage/MErrorPageContainer');

class DataWrapper extends React.Component {

  getChildContext() {
    return {
      data: this.props.data
    };
  }

  render() {
    if (typeof (this.props.data.data) != 'undefined') {
      if (typeof (this.props.data.data.error) == 'undefined') {
        return this.props.children;
      } else {
        if (this.props.data.isMobileDevice) {
          return <MErrorPageContainer />
        } else {
          return <ErrorPageContainer />
        }
      }
    } else {
      return this.props.children;
    }
  }

}

DataWrapper.childContextTypes = {
  data: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.string,
    React.PropTypes.array
  ]).isRequired
};

export default DataWrapper;