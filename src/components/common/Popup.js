import React from 'react'
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'
import * as Analytics from '../../config/analytics'


class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.onModalClosed = this.onModalClosed.bind(this);
        this.onModalOpened = this.onModalOpened.bind(this);
    }

    getStyles() {
        return ({
            modalContainer: {
                background: "transparent",
                boxShadow: "none",
                height: "100%",
                width: "70%",
                WebkitFontSmoothing: 'antialiased',
                overflowY: "initial"
            },

            modalStyle: {
                background: "white",
                boxShadow: "0 40px 80px 0 rgba(0,0,0,0.1)",
                borderRadius: 6,
                marginTop: 10,
                padding: 0
            },
            popOutertext: {
                fontSize: VALUES.SIZES.EXTRA_LARGE,
                color: VALUES.COLORS.BLUE5
            },
            topContent: {
                padding: 20,
                height: "101px",
                borderRadius: "5px 5px 0 0",
                background: 'linear-gradient(90deg, #4F45D6 0%, #675ED0 100%)',
                color: "white"
            },
            bottomContent: {
                minHeight: 200,
                background: "white",
                borderRadius: "0 0 5px 5px",
            }
        })
    }



    render() {
        const styles = this.getStyles();
        return <div id={this.props.popupId} className="modal" style={styles.modalContainer}>
            <div className="row">
                <div className="col s3" style={styles.popOutertext}>{this.props.outerText}</div>
                <div className="col s7" style={styles.modalStyle}>
                    <div style={styles.topContent}>
                        <div className="truncate" style={{ fontSize: VALUES.SIZES.MEDIUM, color: VALUES.COLORS.SEASHELL }}>{this.props.title}</div>
                        <div className="truncate" style={{ fontSize: VALUES.SIZES.SMALL, color: VALUES.COLORS.SEASHELL, opacity: 0.85 }}>{this.props.subTitle}</div>
                    </div>
                    <div style={styles.bottomContent}>
                        {this.props.children}
                    </div>
                </div>
                <div className="col s1 offset-s1" style={{ cursor: "pointer", fontSize: VALUES.SIZES.EXTRA_LARGE }}>
                    {
                        this.props.dismissible ?
                            <i className="material-icons" style={{ fontSize: VALUES.SIZES.EXTRA_LARGE }} onClick={() => this.closePopup()}> close</i>
                            :
                            null
                    }

                </div>
            </div>
        </div>
    }

    onModalOpened() {
        if ($(".modal-overlay").length == 0) {
            $('<div class="modal-overlay" id="materialize-modal-overlay-1" style="z-index: 1002;display: block; opacity: 0.9;"></div>').appendTo(document.body);
        }
        Analytics.track(this.props.pageName, this.props.popupId + "Opened");
        if (this.props.onModalOpened) {
            this.props.onModalOpened();
        }
    }

    onModalClosed() {
        $('.modal-overlay').remove();
        $('body').css("overflow", "auto");
        if (this.props.onModalClosed) {
            this.props.onModalClosed();
        }

        Analytics.track(this.props.pageName, this.props.popupId + "Closed");

    }


    openPopup() {
        $('#' + this.props.popupId).modal({
            dismissible: this.props.dismissible,
            opacity: 0.9,
            ready: this.onModalOpened,
            complete: this.onModalClosed
        });

        $('#' + this.props.popupId).modal('open');
    }

    closePopup() {
        if (!utils.isEmpty($('#' + this.props.popupId).modal)) {
            $('#' + this.props.popupId).modal('close');
        }
    }




}

Popup.propTypes = {
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    onCloseClick: React.PropTypes.func,
    onModalClosed: React.PropTypes.func,
    outerText: React.PropTypes.string,
    popupId: React.PropTypes.string,
    onModalOpened: React.PropTypes.func,
    dismissible: React.PropTypes.bool
};

Popup.defaultProps = {
    title: "Popup title",
    subTitle: "Popup Subtitle",
    outerText: "Buy this scheme",
    popupId: "popupModal",
    dismissible: true
};


module.exports = Popup;