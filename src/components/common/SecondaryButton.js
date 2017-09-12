import React from 'react'
import * as VALUES from '../../config/values'
import Radium from "radium"
import Loader from './Loader';

class SecondaryButton extends React.Component {

    getStyles() {
        return {
            commonStyle: {
                color: this.props.transparent ? "white" : VALUES.COLORS.BLUE4,
                textTransform: "capitalize",
                borderRadius: "5px",
                padding: this.props.padding,
                boxShadow: "none",
                height: VALUES.SIZES.BUTTON_HEIGHT,
                width: this.props.fullWidth ? '100%' : this.props.width
            },
            buttonStyle: {
                background: this.props.transparent ? "transparent" : "white",
                border: this.props.transparent ? '0.5px solid rgba(255,255,255,0.6)' : "1px solid " + VALUES.COLORS.GREY3,
                lineHeight: this.props.transparent ? "50px" : "49px",
                cursor: 'pointer',
                ':hover': {
                    background: this.props.transparent ? 'rgba(255,255,255,0.4)' : VALUES.COLORS.SEASHELL,
                    border: this.props.transparent ? '0.5px solid rgba(255,255,255,0.6)' : 'solid 1px rgba(0, 0, 0, 0.2)'
                }
            },
            disabledStyle: {
                border: "1px solid " + VALUES.COLORS.GREY3,
                background: "white",
                lineHeight: "50px",
                cursor: 'not-allowed',
                opacity: 0.5
            },
        }
    }

    render() {
        const styles = this.getStyles();
        return (
            <div>
                <div className="waves-effect waves-dark btn-large" style={styles.buttonStyle}
                    style={this.props.disabled || this.props.showLoader ? [styles.commonStyle, styles.disabledStyle] : [styles.commonStyle, styles.buttonStyle]}
                    onClick={this.props.disabled || this.props.showLoader ? null : this.props.onButtonClick}>
                    {
                        this.props.showLoader ?
                            <div className="valign-wrapper" style={{ height: 50 }}>
                                <div className="valign" style={{ height: 36, marginRight: 10 }}><Loader loaderColor={VALUES.COLORS.GREEN1} /></div>
                                <div className="valign">{this.props.loadingText}</div>
                            </div>
                            : <div>{this.props.buttonText}</div>
                    }
                </div>
            </div >
        );
    }
}

SecondaryButton.propTypes = {
    buttonText: React.PropTypes.string,
    onButtonClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    width: React.PropTypes.string,
    padding: React.PropTypes.string,
    transparent: React.PropTypes.bool,
    showLoader: React.PropTypes.bool,
    loadingText: React.PropTypes.string
};

SecondaryButton.defaultProps = {
    buttonText: 'Button',
    fullWidth: false,
    padding: '0 2rem',
    disabled: false,
    width: "auto",
    transparent: false,
    showLoader: false,
    loadingText: "Loading..."
};


module.exports = Radium(SecondaryButton);