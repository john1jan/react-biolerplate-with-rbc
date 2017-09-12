import React from 'react'
const ErrorPage = require('../../components/error_page/ErrorPage');
import commonStyles from '../../styles/app_styles'
import DocumentMeta from 'react-document-meta';
import * as metaUtils from '../../config/metaUtils';

let metaIndex = null;
class ErrorPageContainer extends React.Component {

    componentWillMount() {
        let title = "Server Error ";
        let desc = '';
        let imageUrl = '/resources/logo.svg';
        let routeName = '';
        metaIndex = metaUtils.getMetaIndex(title, desc, routeName, imageUrl, false);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <DocumentMeta {...metaIndex} />
                <div style={commonStyles.getFont}><ErrorPage /></div>
            </div>
        );
    }
}

ErrorPageContainer.contextTypes = {
    data: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array,
    ]).isRequired
};

module.exports = ErrorPageContainer;