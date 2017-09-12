import React from 'react'
const logger = require('../../../config/logger')
import * as utils from '../../../config/utils'
import * as ENV from '../../../config/env'
import * as ROUTES from '../../../routes';
import * as VALUES from '../../../config/values'
import * as UrlHelper from '../../../config/url_helper'
import * as Analytics from '../../../config/analytics'
const pageName = "SideNavBar"

class MSideNavbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            containerLeft: this.props.containerLeft,
            navbarTransform: this.props.navbarTransform,
            sideNavWidth: '278px',
            showLogout: false,
            logoutFetching: false,
            isLoggedIn: false,
            mobileNumber: "",
            userName: "",
            userEmail: ""
        }

    }

    componentWillReceiveProps(newProps) {
        this.setState({
            containerLeft: newProps.containerLeft,
            navbarTransform: newProps.navbarTransform
        })
    }

    getStyles() {
        let transformm = 'translate(' + this.state.navbarTransform + ', 0px)';
        const styles = {
            fullScreencontainer: {
                position: 'fixed',
                width: '100%',
                height: '100%',
                transitionDuration: '0.01s',
                background: 'rgba(0, 0, 0, 0.6)',
                zIndex: '1500',
                left: this.state.containerLeft,
                top: '0',
                outline: 'none',
            },

            navBarContainer: {
                position: 'fixed',
                transitionDuration: '0.5s',
                // background: 'linear-gradient(160.56deg, rgb(163, 231, 178) 0%, white 65%)',
                background: 'linear-gradient(280.56deg,  #EEF0FF  20%, white 95%)',
                top: '0',
                left: '0',
                width: this.state.sideNavWidth,
                height: '100%',
                zIndex: '2000',
                transform: transformm
            },


            menuItem: {
                cursor: "pointer",
                padding: "10px",
                fontSize: '14px',
                display: 'block',
                color: 'black'
            },

            navBarHeaderStyle: {
                background: 'white',
                margin: 0,
                color: "white",
                height: '75px'
            },

            iconImg: {
                width: '50px',
                height: '50px',
                marginTop: '-5px'
            },

            headerGroww: {
                fontSize: '22px',
                color: VALUES.COLORS.WATERLOO,
                margin: 0
            },

            linkStyle: {
                fontSize: '14px'
            },
            referStyle: {
                fontSize: '14px',
                fontWeight: '600'
            }
        }
        return styles;
    }


    componentDidMount() {
        if (window.innerWidth * 0.75 > 500) {
            this.setState({ sideNavWidth: '500px' })
        } else {
            this.setState({ sideNavWidth: window.innerWidth * 0.75 + 'px' })
        }

    }
    render() {
        let styles = this.getStyles();
        return (
            <div>
                <div style={styles.fullScreencontainer} onClick={() => this.onOuterContainetClick()}>
                </div>
                <div id="navBar" style={styles.navBarContainer}>
                    <div className="col s12 center-align row" style={styles.navBarHeaderStyle} >
                        <div className="col s12 left-align" style={{ margin: '15px 0 0 0', padding: 0 }}>
                            <div className="col s9" style={{ overflow: 'hidden' }}>
                                <h6 style={styles.headerGroww}>Groww</h6>
                                <h5 style={{ fontSize: VALUES.SIZES.MOBILE_SMALL, color: VALUES.COLORS.BLUE6, marginTop: 5 }}>{this.state.userName}</h5>
                            </div>
                            <div className="col s3 valign-wrapper" style={{ overflow: 'hidden' }}>
                                <img src={ENV.HOST + "/resources/logo-groww.png"} style={styles.iconImg} />
                            </div>
                        </div>
                    </div>

                    <div className="col s12">
                        {this.getSideMenu()}
                    </div>
                </div >
            </div >
        );
    }

    getSideMenu() {
        if (this.state.isLoggedIn) {
            return this.getLoginMenu()
        } else {
            return this.getNotLoginMenu()
        }
    }

    getLoginMenu() {
        let styles = this.getStyles();
        return (
            <div>
                <div style={styles.menuItem} onClick={() => this.gotoDashboard()}>
                    <h5 style={styles.linkStyle}>Dashboard</h5>
                </div>



                <div style={styles.menuItem} onClick={() => this.onLogoutClick()}>
                    <h5 style={styles.linkStyle}>Logout</h5>
                </div>
            </div>
        )
    }

    getNotLoginMenu() {
        let styles = this.getStyles();
        return (
            <div>
                <div className="col s12" style={{ padding: 0 }}>
                    Login
                </div>

            </div>
        )
    }


    onOuterContainetClick() {
        this.props.onOuterClick();
    }
}

MSideNavbar.propTypes = {
    containerLeft: React.PropTypes.string.isRequired,
    navbarTransform: React.PropTypes.string.isRequired
};

MSideNavbar.defaultProps = {
    containerLeft: '-1050px',
    navbarTransform: '-500px'
};



MSideNavbar.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = MSideNavbar;
