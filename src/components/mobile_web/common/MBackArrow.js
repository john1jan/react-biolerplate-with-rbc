import React from 'react'
const logger = require('../../../config/logger')
import * as VALUES from '../../../config/values'
import * as ENV from '../../../config/env'
import * as utils from '../../../config/utils'
import * as UrlHelper from '../../../config/url_helper'
import * as ROUTES from '../../../routes';
import Radium from "radium";

class MBackArrow extends React.Component {

    constructor(props) {
        super(props);
    }


    getStyles() {
        return ({
            backArrow: {
                cursor: "pointer",
                ':hover': {
                    color: VALUES.COLORS.GREEN1
                }
            },
            backButton: {
                color: this.props.color
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

MBackArrow.propTypes = {
    onBackClick: React.PropTypes.func,
    color: React.PropTypes.string
};

MBackArrow.defaultProps = {
    color: 'black'
};

MBackArrow.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = Radium(MBackArrow);