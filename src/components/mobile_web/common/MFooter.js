import React from 'react'
import * as VALUES from '../../../config/values'
import * as ENV from '../../../config/env'
import * as ROUTES from '../../../routes';
import MLogoComponent from "../common/MLogoComponent"
import * as Analytics from '../../../config/analytics'
import {
    generateShareIcon
} from 'react-share';

let FacebookIcon = null;
let TwitterIcon = null;


class MFooter extends React.Component {
    getStyles() {
        return ({
            main: {
                color: "white",
                background: VALUES.COLORS.MIRAGE,
                WebkitFontSmoothing: 'antialiased',
                marginBottom: 0
            },
            cover2: {
                padding: '0 0 40px 0',
                margin: '0',
                background: VALUES.COLORS.MIRAGE,
                color: 'white',
                WebkitFontSmoothing: 'antialiased'
            },
            bottomDisclaimer: {
                padding: 10,
                fontSize: VALUES.SIZES.SMALL,
                fontWeight: 500,
                marginTop: -20,
                lineHeight: '24px',
                letterSpacing: '1px'
            },
            footerLink: {
                padding: '5px 10px 5px 10px ',
                color: "white"
            },
            footerLine: {
                height: 1,
                opacity: 0.1,
                borderBottom: "1px solid #FFFFFF",
                boxSizing: "border-box",
                fontWeight: 500,
                fontSize: '15px',
                lineHeight: '32px',
            },
            baseContainer: {
                maxWidth: VALUES.SIZES.PAGE_MAX_WIDTH,
                minWidth: 320,
                width: '100%'
            },
            disclaimer: {
                padding: "20px 20px",
                textAlign: 'justify'
            },
            disclaimerContent: {
                padding: 20,
                fontSize: VALUES.SIZES.SMALL_TINY,
                lineHeight: "26px",
                textAlign: "justify"
            },
            connect: {
                padding: 10,
                fontSize: VALUES.SIZES.SMALL,
                fontWeight: 500,
                marginTop: 10,
                lineHeight: '24px',
                letterSpacing: '1px'
            },
            mail: {
                padding: '0 9px 10px',
                color: 'white',
                fontSize: '15px',
                position: 'relative',
                left: 8,
                width: 40,
                height: 40,
                fontWeight: 500
            }
        })
    }

    componentWillMount() {
        FacebookIcon = generateShareIcon('facebook');
        TwitterIcon = generateShareIcon('twitter');
    }

    render() {
        const styles = this.getStyles();
        return <div className="row" style={styles.main} >
            <div style={{ background: VALUES.COLORS.EBONY_CLAY }}>
                <div className="col s12" style={{ padding: "50px 10px 30px 20px", background: VALUES.COLORS.EBONY_CLAY }} >
                    <div className="col l3 m6 s12">
                        <div >
                            <MLogoComponent />
                            <div className="col s12" style={{ padding: '0 10px 10px 10px' }}>
                                <p > Salarpuria Tower I, Hosur Rd, </p>
                                <p > Koramangala, Bengaluru 560095</p>
                                <p > Phone: +91 9108800604 </p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12" style={{ marginTop: -15, padding: 0 }}>

                        <div className="col m6 s12" style={{ paddingTop: 10, paddingBottom: 20 }}>
                            <div className="col m6 s12" style={styles.connect}>
                                EXPLORE
                            </div>
                            <a className="col s12" style={styles.footerLink} href={"" + ENV.HOST + ROUTES.REFERAL} onClick={() => this.onFooterLinkClicked("Refer")}>
                                Refer and Earn
                            </a>

                            <a className="col s12" style={styles.footerLink} href={"" + ENV.HOST + ROUTES.EXPLORE} onClick={() => this.onFooterLinkClicked("Portfolio")}>
                                Top Portfolios
                                            </a>

                            <a className="col s12" style={styles.footerLink} href={ENV.HOST + ROUTES.MF_CATEGORIES} onClick={() => this.onFooterLinkClicked("MutualFund")}>
                                Mutual Funds Categories
                                           </a>
                        </div>

                        <div className="col m6 s12" style={{ paddingTop: 10, paddingBottom: 20 }}>
                            <div className="col s12 m12" style={styles.connect}>
                                WHO WE ARE
                            </div>
                            <a className="col s6" style={styles.footerLink} href={ENV.HOST + ROUTES.ABOUT_US} onClick={() => this.onFooterLinkClicked("AboutUs")}>
                                About Us
                                            </a>
                            <a className="col s6" style={styles.footerLink} href={ENV.HOST + ROUTES.MF_BASE + ROUTES.AMC_LANDING} onClick={() => this.onFooterLinkClicked("Partners")}>
                                Partners
                                            </a>
                            <a className="col s6" target="_blank" style={styles.footerLink} href="https://groww.in/faq/" onClick={() => this.onFooterLinkClicked("FAQ")}>
                                FAQ
                                            </a>
                            <a className="col s6" target="_blank" style={styles.footerLink} href="https://groww.in/blog/" onClick={() => this.onFooterLinkClicked("Blog")}>
                                Blog
                                            </a>
                        </div>
                        <div className="col m6 s12" style={{ marginBottom: '20px' }}>
                            <div className="col s12 m12" style={styles.connect}>
                                RESOURCES
                            </div>
                            <a className="col s12" target="_blank" style={styles.footerLink} href="https://groww.in/sip-calculator/" onClick={() => this.onFooterLinkClicked("SIPCalculator")}>
                                SIP Calculator
                                            </a>

                            <a className="col s12" target="_blank" style={styles.footerLink} href="https://groww.in/beginners-guide-mutual-funds/" onClick={() => this.onFooterLinkClicked("BeginnersGuide")}>
                                Beginners Guide to Mutual Funds
                                           </a>

                            <a className="col s12" target="_blank" style={styles.footerLink} href="https://groww.in/mutual-fund-selection-free-ebook/" onClick={() => this.onFooterLinkClicked("eBook")}>
                                FREE eBook - Mutual Fund Selection
                                            </a>
                        </div>
                    </div>
                </div>
                <div className="col s12" style={styles.footerLine}></div>
                <div className="col s12" style={{ padding: "20px 20px" }}>
                    <div className="col s12" style={{ padding: 0 }}>
                        <div className="col s6"><a style={{ padding: 0, color: 'white' }} href="https://groww.in/privacy-policy/" onClick={() => this.onFooterLinkClicked("PrivacyPolicy")}>Privacy Policy</a></div>
                        <div className="col s6"><a style={{ padding: 0, color: 'white' }} href="https://groww.in/terms-and-conditions/" onClick={() => this.onFooterLinkClicked("T&C")}>Terms and Conditions</a></div>
                    </div>
                    <div className="col s12" style={{ marginTop: '15px' }}>ⓒ 2017 Nextbillion Technology Pvt Ltd</div>
                </div>
                <div className="col s12 valign-wrapper" style={{ justifyContent: 'center' }}>
                    {/*<div>*/}
                    <div>
                        <a className="col s12" style={{ color: 'white', padding: '5px 10px', marginLeft: -15 }} target="_blank" href="https://www.facebook.com/growwapp" onClick={() => this.onFooterLinkClicked("Facebook")}>
                            <FacebookIcon size={40} round={true} />
                        </a>
                    </div>
                    <div>
                        <a className="col s12" style={styles.footerLink} target="_blank" href="https://twitter.com/_groww" onClick={() => this.onFooterLinkClicked("Twitter")}>
                            <TwitterIcon size={40} round={true} />
                        </a>
                    </div>
                    <div style={{ maxHeight: 50 }}>
                        <a className="col s12 btn-floating waves-effect waves-light red" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=support@groww.in&su=Hello&shva=1" target="_blank" style={styles.mail}>
                            {/*<img width="38px" height="38px" src={ENV.HOST + '/resources/mail-groww.png'} />*/}
                            <i className="material-icons" style={{ paddingRight: 20 }}>email</i>
                        </a>
                    </div>
                    {/*</div>*/}
                </div>
            </div>
            <div className="col s12" style={styles.cover2}>
                <div className="container" style={styles.baseContainer}>
                    <div className="col s12" style={{ padding: '0px 13px' }}>
                        <div style={styles.disclaimer}>
                            <div style={{ padding: '10px 0' }}>
                                <div className="col s12" style={{ padding: 0 }}>
                                    <div>Mutual fund investments are subject to market risks. Please read the scheme information and other related documents carefully before investing.</div>
                                    <div style={{ marginTop: 20 }}>Past performance is not indicative of future returns. Please consider your specific investment requirements, risk tolerance, investment goal, time frame, risk and reward balance and the cost associated with the investment before choosing a fund, or designing a portfolio that suits your needs.</div>
                                    <div className="col s12" style={styles.footerLine2}></div>
                                    <div style={{ marginTop: 50, fontWeight: 500, fontSize: VALUES.SIZES.SMALL_TINY }}>MOST POPULAR ON GROWW</div>
                                    <div style={{ marginTop: 25, fontSize: VALUES.SIZES.TINY }}>BEST PORTFOLIOS: <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.SAVED_PORTFOLIO + 'high-growth-sips-for-long-term'} target="_blank">HIGH GROWTH SIP FOR LONG TERM</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.SAVED_PORTFOLIO + 'best-tax-saving-elss-funds-for-2017'} target="_blank">BEST TAX SAVING ELSS PORTFOLIO FOR 2017</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.SAVED_PORTFOLIO + 'wealth-creation'} target="_blank">WEALTH CREATION</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.SAVED_PORTFOLIO + 'better-than-fd'} target="_blank">BETTER THAN FD</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.SAVED_PORTFOLIO + 'high-risk-high-returns'} target="_blank">HIGH RISK HIGH RETURNS</a></span></div>
                                    <div style={{ marginTop: 10, fontSize: VALUES.SIZES.TINY }}>BEST MUTUAL FUNDS: <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.MF_DETAIL_PAGE + 'birla-sun-life-equity-fund-growth'} target="_blank">BIRLA SUNLIFE EQUITY FUND</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.MF_DETAIL_PAGE + 'mirae-asset-india-opportunities-fund-regular-growth'} target="_blank">MIRAE ASSET INDIA OPPORTUNITIES FUND</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.MF_DETAIL_PAGE + 'reliance-small-cap-fund-growth'} target="_blank">RELIANCE SMALL CAP FUND</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.MF_DETAIL_PAGE + 'kotak-emerging-equity-scheme-regular-growth'} target="_blank">KOTAK EMERGING EQUITY SCHEME</a></span></div>
                                    <div style={{ marginTop: 10, fontSize: VALUES.SIZES.TINY }}>ARTICLES: <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.BLOG + 'mutual-funds-rs-500/'} target="_blank">MUTUAL FUNDS RS 500</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.BLOG + 'choose-mutual-funds/'} target="_blank">CHOOSE MUTUAL FUNDS</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.BLOG + 'what-is-a-mutual-fund-how-does-it-work/'} target="_blank">WHAT IS MUTUAL FUNDS HOW DOES IT WORK</a></span> &nbsp;|&nbsp; <span style={{ WebkitFontSmoothing: 'antialiased' }}><a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.BLOG + 'best-elss-tax-saving-mutual-fund/'} target="_blank">TAX SAVING MUTUAL FUNDS</a></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {this.getExtendedFooter()}
            </div>
        </div >;
    }

    getExtendedFooter() {
        const styles = this.getStyles()
        if (this.props.showExtendedFooter) {
            return <div className="col s12" style={{ padding: '0px 35px 30px 35px', textAlign: 'justify' }}>
                <div className="col s12" style={styles.footerLine2}></div>
                <div style={{ WebkitFontSmoothing: 'antialiased', marginTop: 10, fontWeight: 500 }}>ABOUT GROWW</div>

                <div style={{ marginTop: 20 }}>Groww is an investing platform where users can create and/or select mutual fund portfolios and invest their money. Groww provides objective evaluation of portfolios and does not endorse any portfolio. Investors shall invest with their own discretion. Groww does not guarantee any returns or safety of capital.</div>

                <div style={{ marginTop: 20 }}>Groww helps investors in the following way</div>
                <div> &nbsp;· By providing objective evaluation of products available on Groww</div>
                <div> &nbsp;· By bringing up red flags, if any, involved in the products. However Groww does not guarantee to bring out all red flags</div>
                <div> &nbsp;· By being transparent about fees and charges involved in investing in a product</div>
                <div> &nbsp;· By clearly representing the risk associated with buying a product</div>

                <div style={{ WebkitFontSmoothing: 'antialiased', marginTop: 40, fontWeight: 500 }}>SECURE TRANSACTIONS ON GROWW</div>

                <div style={{ marginTop: 20 }}>All transactions on Groww are safe and secure. Users can invest through SIP or Lumpsum using Netbanking through all supported banks. It uses BSE Star MF (with Member code 11724) as transaction platform.</div>

                <div style={{ WebkitFontSmoothing: 'antialiased', marginTop: 40, fontWeight: 500 }}>INVESTING IN MUTUAL FUNDS</div>

                <div style={{ marginTop: 20 }}>Mutual fund investments are very popular with individual investors because of the benefits they provide. Among the many advantages, the most important factors that drive investors to mutual funds are that Investors can</div>

                <div style={{ marginTop: 20 }}>- Start with any amount (as low as 500)</div>
                <div>- Diversify across multiple stocks and other instruments like debt, gold etc.</div>
                <div>- Start automated monthly investments (SIP)</div>
                <div>- Invest without requiring to open DMAT account</div>

                <div style={{ marginTop: 20 }}>All type of mutual funds are available on Groww.</div>

                <div style={{ WebkitFontSmoothing: 'antialiased', marginTop: 40, fontWeight: 500 }}>INVESTING IN MUTUAL FUND PORTFOLIOS</div>
                <div style={{ marginTop: 20 }}>Portfolio is collection of mutual funds designed to meet your investment goals. Investing in mutual fund portfolios helps you in diversifying your investments and reduces the risk. Portfolios also help you in assigning an investment goals and make it easy for you to save for and achieve your goals. You can create a portfolio yourself or ask an expert to build it for you.</div>


                <div style={{ WebkitFontSmoothing: 'antialiased', marginTop: 40, fontWeight: 500 }}>DISCLAIMER</div>

                <div style={{ marginTop: 20 }}>NextBillion Technology Private Limited (with <a style={{ color: VALUES.COLORS.GREEN1 }} href={ENV.HOST + ROUTES.BLOG + ROUTES.ARN} target="_blank">ARN-111686</a>) makes no warranties or representations, express or implied, on products offered through the platform. It accepts no liability for any damages or losses, however caused, in connection with the use of, or on the reliance of its product or related services. Unless otherwise specified, all return figure shown above are for illustrative purposes only. Actual returns will vary greatly and depends on personal and market circumstances. The information provided by our blog is educational only and is not investment or tax advice. NextBillion Technology Private Limited does not endorse views given or portfolio designed by third parties on the website, and these are their independent opinion on the scheme or performance of the schemes. Terms and conditions of the website/app are applicable. Privacy policy of the website are applicable. Prevent unauthorised transactions in your account. Receive information of your transactions directly to your mobile/email.
                    Issued in the interest of investors, KYC is one time exercise while dealing in Mutual Funds - once KYC is done you need not undergo the same process again when you approach another Mutual Fund</div>
            </div>

        }
        else {
            return null
        }
    }

    onFooterLinkClicked(footerLink) {
        Analytics.track("Footer", footerLink + "Click");
    }

}


MFooter.contextTypes = {
    router: React.PropTypes.object.isRequired
};

MFooter.propTypes = {
    showExtendedFooter: React.PropTypes.bool
};

MFooter.defaultProps = {
    showExtendedFooter: false
};

module.exports = MFooter;