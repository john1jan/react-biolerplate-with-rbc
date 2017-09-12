import React from 'react'
import * as VALUES from '../../config/values'
import Radium from "radium"
import Loader from './Loader';

class PrimaryButton extends React.Component {

    getStyles() {
        return {
            commonStyle: {
                color: this.props.textColor,
                textTransform: "capitalize",
                boxShadow: 'none',
                padding: this.props.padding,
                borderRadius: "5px",
                height: VALUES.SIZES.BUTTON_HEIGHT,
                lineHeight: VALUES.SIZES.BUTTON_HEIGHT,
                width: this.props.fullWidth ? '100%' : this.props.width
            },

            buttonStyle: {
                background: this.props.buttonBackground,
                color: this.props.textColor,
                cursor: 'pointer',
                ':hover': {
                    background: this.props.buttonBackgroundHover
                }
            },
            disabledStyle: {
                opacity: 0.5,
                cursor: 'not-allowed'
            },
        }
    }

    render() {
        const styles = this.getStyles();
        return (
            <div>
                <div className="waves-effect waves-dark btn-large "
                    style={this.props.disabled || this.props.showLoader ? [styles.commonStyle, styles.disabledStyle] : [styles.commonStyle, styles.buttonStyle]}
                    onClick={this.props.disabled || this.props.showLoader ? null : this.props.onButtonClick}>
                    {
                        this.props.showLoader ?
                            <div className="valign-wrapper" style={{ height: 50 }}>
                                <div className="valign" style={{ height: 36, marginRight: 10 }}><Loader loaderColor="white" /></div>
                                <div className="valign">{this.props.loadingText}</div>
                            </div>
                            :
                            <div>{this.props.buttonText}</div>
                    }
                </div>
            </div >
        )
    }
}

PrimaryButton.propTypes = {
    buttonText: React.PropTypes.string,
    onButtonClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    width: React.PropTypes.string,
    padding: React.PropTypes.string,
    icon: React.PropTypes.string,
    showLoader: React.PropTypes.bool,
    loadingText: React.PropTypes.string
};

PrimaryButton.defaultProps = {
    buttonText: 'Button',
    fullWidth: false,
    disabled: false,
    width: 'auto',
    padding: '0 2rem',
    showLoader: false,
    loadingText: "Loading...",
    buttonBackground: VALUES.COLORS.GREEN1,
    buttonBackgroundHover: VALUES.COLORS.GREEN2,
    textColor: VALUES.COLORS.BLUE4
};

module.exports = Radium(PrimaryButton);
