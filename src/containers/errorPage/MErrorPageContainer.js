import React from 'react'
const MErrorPage = require('../../components/mobile_web/error_page/MErrorPage');
import commonStyles from '../../styles/app_styles'
import DocumentMeta from 'react-document-meta';
import * as metaUtils from '../../config/metaUtils';

let metaIndex = null;
class MErrorPageContainer extends React.Component {

    componentWillMount() {
        let title = "Server Error";
        let desc = '';
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
                <div style={commonStyles.getFont}><MErrorPage /></div>
            </div>
        );
    }
}

MErrorPageContainer.contextTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array,
    ]).isRequired
};

module.exports = MErrorPageContainer;