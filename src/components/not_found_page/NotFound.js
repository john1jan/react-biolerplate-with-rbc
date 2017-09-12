import React from 'react'
import * as VALUES from '../../config/values'
import SecondaryButton from '../common/SecondaryButton'
import * as ROUTES from '../../routes';
import * as ENV from '../../config/env';
import Radium from 'radium'
import * as Analytics from '../../config/analytics'
import LogoComponent from '../common/LogoComponent'


class NotFound extends React.Component {
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
                textShadow: '2px 2px ' + VALUES.COLORS.BLUE10,
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
                fontSize: '40px',
                marginLeft: 150,
                paddingTop: 50,
                textAlign: 'center',
                WebkitFontSmoothing: 'antialiased'
            }
        }
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.main} >
                <div className="container row" style={styles.topBannerContainer}>
                    <div style={{ padding: 20 }}>
                        <LogoComponent imageColor="light" />
                    </div>
                    <div key='thgfgfd' className='valign-wrapper' style={{ justifyContent: 'center' }}>
                        <div style={[styles.fourZeroFour]}>
                            40
                    </div >
                        <div key='dfghjhgf' style={[styles.fourZeroFour, {
                            WebkitTransform: 'rotate(12deg)', transform: 'rotate(12deg)', marginTop: 20, marginLeft: 20,
                        }]}>
                            4
                    </div>
                        <div style={styles.secondaryText}>
                            Oops!! We couldn’t find <br />this page ...
                </div>
                    </div>
                    <div className="valign-wrapper" style={{ justifyContent: 'center', marginTop: 15 }}>
                        <div style={{ margin: 10 }}>
                            <SecondaryButton transparent={true} width="200px" buttonText="Home" onButtonClick={() => this.onHomeClick()} />
                        </div>
                        <div style={{ margin: 10 }}>
                            <SecondaryButton transparent={true} width="200px" buttonText="Explore" onButtonClick={() => this.onExploreClick()} />
                        </div>
                        <div style={{ margin: 10 }}>
                            <SecondaryButton transparent={true} width="200px" buttonText="Mutual Funds" onButtonClick={() => this.onMutualFundsClick()} />
                        </div>
                        <div style={{ margin: 10 }}>
                            <SecondaryButton transparent={true} width="200px" buttonText="Portfolios" onButtonClick={() => this.onPortfoliosClick()} />
                        </div>
                    </div>
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
    onMutualFundsClick() {
        // this.context.router.push(ROUTES.HOME)
        window.location = ENV.HOST + ROUTES.MF_BASE
    }
    onPortfoliosClick() {
        // this.context.router.push(ROUTES.HOME)
        window.location = ENV.HOST + ROUTES.PF_BASE
    }
}

NotFound.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Radium(NotFound);