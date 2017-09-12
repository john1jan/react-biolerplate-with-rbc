import React from 'react'
const logger = require('../../../config/logger')
import * as VALUES from '../../../config/values'
import * as ENV from '../../../config/env'
import * as utils from '../../../config/utils'


class MDarkPopup extends React.Component {

    constructor(props) {
        super(props);
        this.onModalClosed = this.onModalClosed.bind(this);
        this.onModalOpened = this.onModalOpened.bind(this);
    }

    getStyles() {
        return ({

            topContent: {
                padding: 20,
                borderRadius: "5px 5px 0 0",
                background: 'linear-gradient(90deg, #675ED0 0%,  #4F45D6 100%)',
                color: "white"
            },
            bottomContent: {
                minHeight: 200,
                background: "white",
                borderRadius: "0 0 5px 5px",
            },

            modalContainer: {
                border: "20px solid #33365B",
                boxShadow: "0 20px 40px 0 rgba(0,0,0,0.3)",
                top: "15% !important"
            },

            modalStyle: {
                margin: 0,
                padding: 0,
                background: "linear-gradient(155.79deg, #363E5F 0%, #1B2243 100%)",
            },
            popOutertext: {
                fontSize: VALUES.SIZES.EXTRA_LARGE,
                color: "white",
                padding: 0
            },
            bottomContext: {
                padding: "20px 0"
            },
            imgStyle: {
                height: 60,
                width: 60
            }
        })
    }


    render() {
        const styles = this.getStyles();
        return <div id={this.props.popupId} className="modal mobileModal" style={styles.modalContainer}>
            <div className="row" style={styles.modalStyle}>
                <div className="col s10" style={styles.popOutertext}>
                    <div className="valign-wrapper">
                        <img src="./resources/shapes-groww.png" style={styles.imgStyle} />
                        <div className="truncate" style={{ fontSize: VALUES.SIZES.MOBILE_SMALL, color: "white" }}>{this.props.title}</div>
                    </div>
                </div>

                <div className="col s1 offset-s1" style={{ padding: 0, cursor: "pointer", fontSize: VALUES.SIZES.MOBILE_EXTRA_LARGE }}>
                    <i className="material-icons" style={{ fontSize: VALUES.SIZES.MOBILE_EXTRA_LARGE, color: "white" }} onClick={() => this.closePopup()}> close</i>
                </div>

                <div className="col s12 " style={{ padding: 20 }}>
                    <div style={{ fontSize: VALUES.SIZES.MOBILE_LARGE, color: "white" }}>{this.props.subTitle}</div>
                    <div style={styles.bottomContext}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        </div>
    }



    onModalOpened() {

    }

    onModalClosed() {
        $('.modal-overlay').remove();
        $('body').css("overflow", "auto");
        if (this.props.onModalClosed) {
            this.props.onModalClosed();
        }

    }


    openPopup() {
        $('#' + this.props.popupId).modal({
            opacity: 0.8,
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

MDarkPopup.propTypes = {
    title: React.PropTypes.string,
    subTitle: React.PropTypes.string,
    onCloseClick: React.PropTypes.func,
    onModalClosed: React.PropTypes.func,
    outerText: React.PropTypes.string,
    popupId: React.PropTypes.string
};

MDarkPopup.defaultProps = {
    title: "Popup title",
    subTitle: "Popup Subtitle",
    outerText: "Buy this scheme",
    popupId: "popupModal"
};


module.exports = MDarkPopup;