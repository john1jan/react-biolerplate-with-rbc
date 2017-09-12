import React from 'react'
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'
import * as Analytics from '../../config/analytics'
import * as UrlHelper from '../../config/url_helper'
import * as ROUTES from '../../routes';
import LogoComponent from "../common/LogoComponent"
import {
    generateShareIcon
} from 'react-share';

const pageName = "Footer"
let FacebookIcon = null;
let TwitterIcon = null;

class Footer extends React.Component {
    getStyles() {
        return ({
            cover1: {
                padding: 0,
                margin: 0,
                background: 'linear-gradient(185deg, rgba(225,190,231,1) 0%, rgba(255,255,255,1) 100%)',
                WebkitFontSmoothing: 'antialiased',
                minHeight: 200

            },

        })
    }


    componentWillMount() {
        FacebookIcon = generateShareIcon('facebook');
        TwitterIcon = generateShareIcon('twitter');
    }


    render() {
        const styles = this.getStyles();

        return (
            <div style={styles.cover1}>
                <div className="row center-align" style={{ padding: 100, margin: 0 }}>
                    <div>Developed by John Francis</div>
                    <div className="valign-wrapper" style={{ padding: 10, justifyContent: "center" }}>
                        <a target="_blank" href="https://www.facebook.com/john1jan" >
                            <FacebookIcon size={40} round={true} />
                        </a>
                        <a target="_blank" href="https://twitter.com/john1jan" >
                            <TwitterIcon size={40} round={true} />
                        </a>
                    </div>

                </div>
            </div>
        );
    }

}


Footer.contextTypes = {
    router: React.PropTypes.object.isRequired
};

Footer.propTypes = {
    showExtendedFooter: React.PropTypes.bool
};

Footer.defaultProps = {
    showExtendedFooter: false
};


module.exports = Footer;
