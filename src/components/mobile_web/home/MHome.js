import React from 'react'
import Slider from 'react-slick'
import * as VALUES from '../../../config/values'
import * as logger from '../../../config/logger'
import * as UrlHelper from '../../../config/url_helper'
import Radium from 'radium'
import MPrimaryButton from '../common/MPrimaryButton'
import MFooter from "../common/MFooter"
import MHeader from "../common/MHeader"
import * as ENV from '../../../config/env'
import * as ROUTES from "../../../routes"
import * as Analytics from '../../../config/analytics'
import TimeAgo from 'react-timeago'

const pageName = "Home"

class MHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicPfs: []
        };
    }

    getStyles() {
        return {
            topbanner: {
                overflow: "hidden"
            },

        }
    }



    render() {
        const styles = this.getStyles();
        return (
            <div>
                <MHeader
                    ref="mHeader"
                    showLoginHeader={false}
                    transparent={false}
                    showBottom={true}
                    onLoginSuccess={() => this.onLoginSuccess()}
                    alreadyLoggedIn={() => this.alreadyLoggedIn()}
                />
                <div>
                    M Home
                </div>
                <div style={{ marginTop: "-80px" }}>
                    <MFooter showExtendedFooter={true} />
                </div>
            </div >
        );
    }


}

MHome.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Radium(MHome)
