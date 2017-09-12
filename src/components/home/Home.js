import React from 'react'
import Slider from 'react-slick'
import * as VALUES from '../../config/values'
import * as logger from '../../config/logger'
import * as UrlHelper from '../../config/url_helper'
import Radium from 'radium'
import PrimaryButton from '../common/PrimaryButton'
import SecondaryButton from '../common/SecondaryButton'
import Header from "../common/Header"
import Footer from "../common/Footer"
import * as Analytics from '../../config/analytics'
import * as ENV from '../../config/env'
import TimeAgo from 'react-timeago'
import * as ROUTES from "../../routes"

const pageName = "Home";
let isHandleLoadCalled = false;
let partnerCarousel = null;
let testimonialCarousel = null;
let currentNumber = 1;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };


    }

    getStyles() {
        return {
            topbanner: {
                overflow: "hidden",
                width: '100%',
                WebkitFontSmoothing: 'antialiased',
                padding: 0,
                margin: 0,
            },
            topBannerContainer: {
                width: '100%',
                maxWidth: VALUES.SIZES.PAGE_MAX_WIDTH,
                padding: VALUES.SIZES.PAGE_PADDING
            },

        }
    }

    render() {
        const styles = this.getStyles();
        return <div>
            <Header />
            <div style={styles.topbanner}>
                <div className="container row" style={styles.topBannerContainer}>
                    <h2>
                        React Boilerplate with route based chunking
                    </h2>
                    <ul className="collection">
                        <li className="collection-item">
                            Code splitting based on routes and lazy loading chunks
                        </li>
                        <li className="collection-item">
                            Preload required js in head tag using express
                        </li>
                        <li className="collection-item">
                            Server side rendering support with config
                        </li>
                        <li className="collection-item">
                            Uses MaterializeCss for UI Framework
                        </li>
                        <li className="collection-item">
                            Environment and Configs variables based on development and production environment
                        </li>
                        <li className="collection-item">
                            Clear speration on colors and sizes for theming
                        </li>
                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    }


}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = Radium(Home)