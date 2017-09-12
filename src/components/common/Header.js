import React from 'react'
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'
import * as Analytics from '../../config/analytics'
import PrimaryButton from './PrimaryButton'
import SecondaryButton from './SecondaryButton'
import LogoComponent from './LogoComponent'
import * as ROUTES from "../../routes"
import Anchor from "../common/Anchor"
import Loader from "../common/Loader"
import Radium from "radium";
import lscache from 'lscache'
import * as UrlHelper from '../../config/url_helper'


const pageName = "Header"
let analyticsArray = [];

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        // this.handleLoad = this.handleLoad.bind(this);
    }



    getStyles() {
        return ({
            headerContainer: {
                background: VALUES.COLORS.darkPrimaryColor
            }
        });
    }




    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.outerContainer}>
                {this.getContent()}

            </div>
        );
    }

    getContent() {
        const styles = this.getStyles();
        return (
            <div className="row" style={styles.headerContainer}>
                <div className="container" style={{ maxWidth: VALUES.SIZES.PAGE_MAX_WIDTH, width: '100%' }}>
                    {this.getHeaderLogo()}
                </div>
            </div>
        );
    }

    getHeaderLogo() {
        const styles = this.getStyles();
        return (
            <div className="col s2" style={{ cursor: "pointer", minHeight: 79 }} onClick={() => this.onLogoClick()} >
                <div className="col s12" style={{ minHeight: 79, paddingRight: 3, paddingTop: 15 }}>
                    <LogoComponent
                        imageColor={this.props.isLogoLight ? "light" : "dark"}
                        logoText="React BiolerPlate"
                        fontColor="#fff" />
                </div>
            </div>
        )
    }




}

Header.propTypes = {
    isLoggedIn: React.PropTypes.bool,
};

Header.defaultProps = {
    isLoggedIn: false,
};

Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Radium(Header);
