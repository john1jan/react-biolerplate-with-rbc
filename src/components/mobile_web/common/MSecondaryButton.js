import React from 'react'
import * as VALUES from '../../../config/values'
import Radium from "radium"
import MLoader from './MLoader';

class MSecondaryButton extends React.Component {

    

    getStyles() {
        return {
            commonStyle: {
                color: this.props.transparent ? "white" : VALUES.COLORS.BLUE4,
                textTransform: "capitalize",
                borderRadius: this.props.showBorder ? "5px" : "0px",
                boxShadow: "none",
                lineHeight: this.props.showBorder ? '35px' : "40px",
                minWidth: '70px',
                display: 'grid',
                height: '40px',
                fontSize: VALUES.SIZES.MOBILE_SMALL,
                padding: "0px 18px",
                width: this.props.fullWidth ? '100%' : this.props.width
            },
            buttonStyle: {
                background: this.props.transparent ? "transparent" : "white",
                border: this.props.transparent ? this.props.showBorder ? '1.5px solid rgba(255,255,255,0.6)' : "0px" : this.props.showBorder ? "2px solid " + VALUES.COLORS.GREY3 : "0px",
                cursor: 'pointer',
                padding: "0px 18px",
            },
            disabledStyle: {
                border: this.props.showBorder ? "2px solid " + VALUES.COLORS.GREY3 : "0px",
                background: "white",
                cursor: 'not-allowed',
                opacity: 0.5,
                padding: "0px 18px",
            },
            loaderStyle: {
                border: this.props.showBorder ? "2px solid " + VALUES.COLORS.GREY3 : "0px",
                background: "white",
                cursor: 'not-allowed',
                padding: "0px 18px",
            }
        }
    }

    render() {
        const styles = this.getStyles();
        return <div>
            <div className="waves-effect waves-dark btn center-align" style={styles.buttonStyle}
                style={this.getButtonStyle()}
                onClick={this.props.disabled || this.props.showLoader ? null : this.props.onButtonClick}>
                {
                    this.props.showLoader ?
                        <div className="valign-wrapper">
                            <div className="valign" style={{ height: 26, padding: "0px 25px" }}><MLoader loaderColor={VALUES.COLORS.GREEN1} /></div>
                            <div className="valign">{this.props.loadingText}</div>
                        </div>
                        :
                        <div>{this.props.buttonText}</div>
                }
            </div>
        </div >;
    }

    getButtonStyle() {
        const styles = this.getStyles();
        if (this.props.disabled) {
            return [styles.commonStyle, styles.disabledStyle];
        } else if (this.props.showLoader) {
            return [styles.commonStyle, styles.loaderStyle];
        } else {
            return [styles.commonStyle, styles.buttonStyle];
        }
    }
}

MSecondaryButton.propTypes = {
    buttonText: React.PropTypes.string,
    onButtonClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    width: React.PropTypes.string,
    transparent: React.PropTypes.bool,
    showLoader: React.PropTypes.bool,
    loadingText: React.PropTypes.string,
    showBorder: React.PropTypes.bool
};

MSecondaryButton.defaultProps = {
    buttonText: 'Button',
    fullWidth: false,
    disabled: false,
    width: "auto",
    transparent: false,
    showLoader: false,
    loadingText: "Loading...",
    showBorder: true
};

module.exports = Radium(MSecondaryButton);