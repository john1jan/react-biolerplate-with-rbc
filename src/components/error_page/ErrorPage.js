import React from 'react'
import * as VALUES from '../../config/values'
import SecondaryButton from '../common/SecondaryButton'
// import Header from '../common/Header'
import * as ROUTES from '../../routes';
import * as ENV from '../../config/env';
import * as Analytics from '../../config/analytics'
import Radium from 'radium'
import LogoComponent from '../common/LogoComponent'

class ErrorPage extends React.Component {
    getStyles() {
        return {
            main: {
                position: 'absolute',
                height: '100%',
                width: '100%',
                background: "linear-gradient(360deg," + VALUES.COLORS.GREEN1 + "  0%, " + VALUES.COLORS.BLUE1 + " 100%)",
            },
            topBannerContainer: {
                width: '100%',
                height: '100%',
                position: 'relative',
                maxWidth: VALUES.SIZES.PAGE_MAX_WIDTH,
                padding: VALUES.SIZES.PAGE_PADDING,
                marginBottom: 0
            },
            fourZeroFour: {
                textAlign: 'center',
                fontSize: '250px',
                color: 'white',
                fontWeight: 100,
                textShadow: '2px 2px ' + VALUES.COLORS.BLUE10,
                WebkitFontSmoothing: 'antialiased'

            },
            goToHome: {
                fontSize: 30,
                color: '#f5f5f0',
                fontWeight: '600',
                textAlign: 'center'
            },
            secondaryText: {
                color: '#f5f5f0',
                fontSize: '37px',
                marginLeft: 100,
                textAlign: 'center',
                fontWeight: 500,
                lineHeight: '80px',
                WebkitFontSmoothing: 'antialiased'
            },
            desc: {
                fontSize: 20,
                marginLeft: 100,
                color: 'white',
                textAlign: 'center',
                WebkitFontSmoothing: 'antialiased'
            },
            iconImg: {
                height: 50,
                width: 183,
                margin: 0,
                padding: 0
            }
        }
    }

    componentDidMount() {
        Analytics.track("ErrorPage", "500ErrorPage");
    }


    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.main} >
                <div className="container row" style={styles.topBannerContainer}>
                    <div style={{ padding: 20 }}>
                        <a href="/">
                            <img className="valign responsive-img" src={ENV.HOST + "/resources/logo.svg"} style={styles.iconImg} />
                        </a>
                    </div>
                    <div key='thgfgfd' className='valign-wrapper' style={{ justifyContent: 'center', marginTop: '30px' }}>
                        <div style={[styles.fourZeroFour, {
                            WebkitTransform: 'rotate(270deg)', transform: 'rotate(270deg)', marginTop: 20, marginLeft: 20, marginRight: 20
                        }]}>
                            5
                    </div >
                        <div key='dfghjhgf' style={styles.fourZeroFour}>
                            00
                    </div>
                        <div>
                            <div style={styles.secondaryText}>
                                Oops!! Something went wrong ...
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

ErrorPage.contextTypes = {
    router: React.PropTypes.object
};

module.exports = Radium(ErrorPage);
