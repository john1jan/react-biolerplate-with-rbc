import React from 'react'
const MHome = require('../../components/mobile_web/home/MHome');
import commonStyles from '../../styles/app_styles'
import DocumentMeta from 'react-document-meta';
import * as utils from '../../config/utils';
import * as ROUTES from '../../routes';
import * as metaUtils from '../../config/metaUtils';

let metaIndex = null;
class MHomeContainer extends React.Component {

  componentWillMount() {
    let title = "React Biolerplate with route based chunking";
    let desc = 'React Biolerplate with route based chunking';
    let imageUrl = '/resources/logo.svg';
    let routeName = '';
    metaIndex = metaUtils.getMetaIndex(title, desc, routeName, imageUrl, true);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <DocumentMeta {...metaIndex} />
        <div style={commonStyles.getFont}><MHome /></div>
      </div>
    );
  }
}

MHomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = MHomeContainer;