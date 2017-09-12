import React from 'react'
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'
import * as UrlHelper from '../../config/url_helper'
import * as ROUTES from '../../routes';
import Radium from "radium";

class BackArrow extends React.Component {

    constructor(props) {
        super(props);
    }


    getStyles() {
        return ({
            backArrow: {
                padding: 10,
                cursor: "pointer",
                ':hover': {
                    color: VALUES.COLORS.GREEN1
                }
            }
        })
    }

    render() {
        const styles = this.getStyles();
        return <div className="center-align waves-effect waves-light" style={styles.backArrow} onClick={() => this.onBackClick()}>
            <i style={styles.backButton} className="material-icons">arrow_back</i>
        </div>;
    }

    onBackClick() {
        if (!utils.isEmpty(this.props.route_name)) {
            this.context.router.replace(this.props.route_name)
        } else {
            this.context.router.goBack();
        }

    }

}

BackArrow.propTypes = {
    onBackClick: React.PropTypes.func
};


BackArrow.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Radium(BackArrow);