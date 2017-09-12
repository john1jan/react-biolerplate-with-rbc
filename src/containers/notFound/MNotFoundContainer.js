import React from 'react'
const MNotFound = require('../../components/mobile_web/not_found_page/MNotFound')
import commonStyles from '../../styles/app_styles'
import DocumentMeta from 'react-document-meta';
import * as ENV from '../../config/env';

import * as metaUtils from '../../config/metaUtils';

let metaIndex = null;
class NotFoundContainer extends React.Component {

  componentWillMount() {
    let title = "Page Not Found";
    let desc = "";
    let imageUrl = '/resources/logo.svg';
    let routeName = "";
    metaIndex = metaUtils.getMetaIndex(title, desc, routeName, imageUrl, false);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <DocumentMeta {...metaIndex} />
        <div style={commonStyles.getFont}><MNotFound /></div>
      </div>
    );
  }
}

NotFoundContainer.contextTypes = {
  data: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.array,
  ]).isRequired,
  router: React.PropTypes.object.isRequired
};

module.exports = NotFoundContainer;