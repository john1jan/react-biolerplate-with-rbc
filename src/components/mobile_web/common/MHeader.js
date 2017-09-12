import React from 'react'
const logger = require('../../../config/logger')
import * as utils from '../../../config/utils'
import * as ENV from '../../../config/env'
import * as ROUTES from '../../../routes';
import * as VALUES from '../../../config/values'
import * as Analytics from '../../../config/analytics'
import * as UrlHelper from '../../../config/url_helper'
import MSideNavbar from './MSideNavbar'
import Radium from 'radium'

const pageName = "MobileHeader";

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 50
var navbarFooterHeight = 50;

class MHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isLoggedIn: false,
            containerLeft: "-1050px",
            navbarTransform: "-500px"
        }
    }




    getStyles() {
        const styles = {
            header1: {
                height: 56,
                background: this.props.transparent ? 'transparent' : 'white',
                zIndex: 1000,
                transitionDuration: '1s',
                boxShadow: this.props.transparent ? 'none' : '0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)'
            },

            header5: {
                cursor: 'pointer',
                color: this.props.transparent ? 'white' : VALUES.COLORS.GREEN1,
                ':hover': {
                    color: VALUES.COLORS.GREEN2,
                },
            },

            header2: {
                color: this.props.transparent ? 'white' : VALUES.COLORS.GREEN1,
                textDecoration: 'none',
                // marginTop: 10,
                paddingTop: 10,
                width: 50,
                paddingLeft: 20,
                marginLeft: -20,
                height: 50

            },

            header4: {
                width: '150px',
                margin: '0 auto',
                color: VALUES.COLORS.GREEN1,
                border: '1px solid ' + VALUES.COLORS.GREEN1,
                ':hover': {
                    background: VALUES.COLORS.GREEN1,
                    color: 'white',
                    cursor: 'pointer'
                },
            },
            headerMain: {
                zIndex: 1000,
                padding: 0,
                height: '56px',
                background: 'white',
                boxShadow: '0 2px 20px 0 rgba(0,0,0,0.1)'
            },
            logoText: {
                fontSize: '24px',
                fontWeight: 500,
                padding: 0,
                lineHeight: '34px',
                color: '#757B93',
                marginTop: 10,
                marginLeft: -5
            },
            overlappingDiv: {
                position: 'absolute',
                width: '100%',
                left: 0,
                height: '56px',
                top: 0
            }
        };
        return styles;
    }

    render() {
        return this.getDefaultHeader()
    }

    getDefaultHeader() {
        const styles = this.getStyles();
        return (
            <div id="mheader" className="nav-mheader-up">
                <div className="row" style={{ margin: 0 }}>
                    <div className="col s12" style={styles.headerMain}>
                        <div className="col s12" style={{ position: 'relative', padding: '0 18px', height: '56px' }}>
                            <a style={styles.header2} onClick={() => this.onLeftButtonClick()} className="waves-effect waves-circle waves-dark button-collapse"><i style={{ fontSize: '30px', color: VALUES.COLORS.WATERLOO }} className="material-icons">menu</i></a>
                            <div style={styles.overlappingDiv}>
                                <div className="col s12 valign-wrapper" style={{ padding: 0, height: 50, justifyContent: 'center' }}>
                                    <a href={ENV.HOST}>
                                        <img style={{ marginTop: 11, width: "130px", height: "36px" }} src={ENV.HOST + "/resources/logo-dark-groww.png"} alt="Groww Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MSideNavbar ref="mSideNavBar"
                        showLoginHeader={this.props.showLoginHeader}
                        containerLeft={this.state.containerLeft}
                        navbarTransform={this.state.navbarTransform}
                        onOuterClick={() => this.onOuterClick()} />
                </div>

                {
                    this.props.showBottom ?
                        <div className="nav-mfooter-up" id="mbuyFooter" style={styles.mBuyFooter}>
                            <div className="col s12">
                                {this.props.children}
                            </div>
                        </div> : null
                }
            </div>
        )
    }



    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onLeftButtonClick() {
        Analytics.track(pageName, "SideNavBarOpened");
        this.setState({
            containerLeft: "0px",
            navbarTransform: "0px"
        })
        $('body').css('overflow', 'hidden');
    }

    onOuterClick() {
        Analytics.track(pageName, "SideNavBarClosed");
        this.setState({
            containerLeft: '-1050px',
            navbarTransform: '-500px'
        })
        $('body').css('overflow', 'auto');
    }
}

MHeader.propTypes = {
    showBottom: React.PropTypes.bool
};

MHeader.contextTypes = {
    router: React.PropTypes.object.isRequired
};

MHeader.defaultProps = {
    showBottom: false
};

module.exports = Radium(MHeader);

module.exports = MHeader;