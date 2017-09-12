import React from 'react'
import * as VALUES from '../../../config/values'
import MSecondaryButton from '../common/MSecondaryButton'
import * as ROUTES from '../../../routes';
import * as ENV from '../../../config/env';
import MLogoComponent from './../common/MLogoComponent';
import Radium from 'radium';
import * as Analytics from '../../../config/analytics';

class MErrorPage extends React.Component {
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
                fontSize: '100px',
                color: 'white',
                textShadow: '2px 2px #777000',
                fontWeight: 100,
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
                fontSize: '18px',
                margin: '0px 10px',
                textAlign: 'center',
                WebkitFontSmoothing: 'antialiased'
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
                <div className="valign-wrapper" style={{ padding: 20, marginLeft: '-15px', justifyContent: 'center' }}>
                    <MLogoComponent imageColor="light" />
                </div>
                <div key='thgfgfd' className='valign-wrapper' style={{ justifyContent: 'center' }}>
                    <div style={[styles.fourZeroFour, {
                        WebkitTransform: 'rotate(270deg)', transform: 'rotate(340deg)', marginTop: 20, marginRight: 20
                    }]}>
                        5
                    </div >
                    <div key='dfghjhgf' style={[styles.fourZeroFour, { marginLeft: '-15px' }]}>
                        00
                    </div>
                </div>
                <div className="col s12" style={styles.secondaryText}>
                    Oops!! Something went wrong ...<br /> We are looking into it but if the problem persists, <br />contact support@groww.in
                </div>
                <div className="col s12" style={{ margin: '50px auto 10px', width: '80%' }}>
                    <MSecondaryButton transparent={true} fullWidth={true} buttonText="Home" onButtonClick={() => this.onHomeClick()} />
                </div>
                <div className="col s12" style={{ margin: '10px auto', width: '80%' }}>
                    <MSecondaryButton transparent={true} fullWidth={true} width="120px" buttonText="Explore" onButtonClick={() => this.onExploreClick()} />
                </div>
            </div >
        );
    }

    onHomeClick() {
        // this.context.router.push(ROUTES.HOME)
        window.location = ENV.HOST + ROUTES.HOME
    }
    onExploreClick() {
        // this.context.router.push(ROUTES.HOME)
        window.location = ENV.HOST + ROUTES.EXPLORE
    }
}

MErrorPage.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Radium(MErrorPage);