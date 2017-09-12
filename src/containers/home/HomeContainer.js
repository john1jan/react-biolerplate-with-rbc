import React from 'react'
const Home = require('../../components/home/Home');
import commonStyles from '../../styles/app_styles'
import DocumentMeta from 'react-document-meta';
import * as ENV from '../../config/env'
import * as utils from '../../config/utils';
import * as ROUTES from '../../routes';
import * as metaUtils from '../../config/metaUtils';

let metaIndex = null;
class HomeContainer extends React.Component {
  componentWillMount() {
    let title = "React boilerplate with route based chunking";
    let desc = 'React boilerplate with route based chunking';
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
        <div style={commonStyles.getFont}><Home /></div>
      </div>
    );
  }
}

HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

module.exports = HomeContainer;