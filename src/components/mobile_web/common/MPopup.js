import React from 'react'
const logger = require('../../../config/logger')
import * as VALUES from '../../../config/values'
import * as ENV from '../../../config/env'
import * as utils from '../../../config/utils'
import * as Analytics from '../../../config/analytics'


class MPopup extends React.Component {

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
                width: "100%",
                top: "15% !important",
                overflowY: "initial"
            },

            modalStyle: {
                background: "white",
                boxShadow: "0 40px 80px 0 rgba(0,0,0,0.1)",
                borderRadius: 6,
                padding: 0,
                fontSize: VALUES.SIZES.MOBILE_SMALL
            },
            topContent: {
                padding: 10,
                borderRadius: "5px 5px 0 0",
                background: 'linear-gradient(90deg, #4F45D6 0%,  #675ED0 100%)',
                color: "white"
            },
            bottomContent: {
                minHeight: 200,
                background: "white",
                borderRadius: "0 0 5px 5px",
                padding: 0
            }
        })
    }



    render() {
        const styles = this.getStyles();
        return <div id={this.props.popupId} className="modal mobileModal" style={styles.modalContainer}>
            <div className="row" style={{ padding: "0px 20px" }}>

                <div className="col s12" style={styles.modalStyle}>
                    <div style={styles.topContent} className="col s12">
                        <div className="col s9">
                            <div className="col s12 truncate" style={{ padding: 0, fontSize: VALUES.SIZES.MOBILE_MEDIUM, color: VALUES.COLORS.SEASHELL }}>{this.props.title}</div>
                            <div style={{ fontSize: VALUES.SIZES.MOBILE_SMALL, color: VALUES.COLORS.SEASHELL, opacity: 0.85 }}>{this.props.subTitle}</div>
                        </div>
                        <div className="col s3">
                            <div className="right-align" style={{ padding: 0, cursor: "pointer", fontSize: VALUES.SIZES.MOBILE_EXTRA_LARGE }}>
                                {this.props.dismissible ?
                                    < i className="material-icons" style={{ fontSize: 24 }} onClick={() => this.closePopup()}> close</i> : null
                                }

                            </div>
                        </div>


                    </div>
                    <div className="col s12" style={styles.bottomContent}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        </div >
    }

    onModalOpened() {
        Analytics.track(this.props.pageName, this.props.popupId + "Opened");
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

MPopup.propTypes = {
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    onCloseClick: React.PropTypes.func,
    onModalClosed: React.PropTypes.func,
    outerText: React.PropTypes.string,
    popupId: React.PropTypes.string,
    pageName: React.PropTypes.string,
    dismissible: React.PropTypes.bool
};

MPopup.defaultProps = {
    title: "Popup title",
    subTitle: "Popup Subtitle",
    outerText: "Buy this scheme",
    popupId: "popupModal",
    pageName: "Popup",
    dismissible: true
};


module.exports = MPopup;