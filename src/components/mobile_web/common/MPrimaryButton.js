import React from 'react'
import * as VALUES from '../../../config/values'
import Radium from "radium"
import MLoader from './MLoader';

class MPrimaryButton extends React.Component {

    getStyles() {
        return {
            commonStyle: {
                background: VALUES.COLORS.GREEN1,
                color: VALUES.COLORS.BLUE4,
                textTransform: "capitalize",
                boxShadow: 'none',
                lineHeight: '40px',
                minWidth: '90px',
                borderRadius: this.props.isRounded ? "5px" : "0px",
                display: 'grid',
                height: '40px',
                fontSize: VALUES.SIZES.MOBILE_SMALL,
                padding: "0px 25px",
                width: this.props.fullWidth ? '100%' : this.props.width
            },

            buttonStyle: {
                background: VALUES.COLORS.GREEN1,
                color: VALUES.COLORS.BLUE4,
                cursor: 'pointer',
                padding: '0 25px'
            },
            disabledStyle: {
                opacity: 0.5,
                cursor: 'not-allowed',
                padding: '0 25px'
            },
            loaderStyle: {
                padding: '0 25px',
                cursor: 'not-allowed'
            }
        }
    }

    render() {
        const styles = this.getStyles();
        return <div>
            <div className="waves-effect waves-dark btn center-align"
                style={this.getButtonStyle()}
                onClick={this.props.disabled || this.props.showLoader ? null : this.props.onButtonClick}>
                {
                    this.props.showLoader ?
                        <div className="valign-wrapper">
                            <div className="valign" style={{ height: 26, padding: '0 8px' }}><MLoader loaderColor="white" /></div>
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

// <div className='row'>
//     {this.props.icon ?
//         <div className="col s2 m2">
//             <div className="valign-wrapper" style={{ height: VALUES.SIZES.BUTTON_HEIGHT }} >
//                 <i className='material-icons' style={{ opacity: '0.2' }}>{this.props.icon}</i>
//             </div>
//         </div>
//         : null
//     }
//     <div className='col s10 offset-s1 center-align' style={{ margin: 0 }}>{this.props.buttonText}</div>
// </div>

MPrimaryButton.propTypes = {
    buttonText: React.PropTypes.string,
    onButtonClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    fullWidth: React.PropTypes.bool,
    width: React.PropTypes.string,
    icon: React.PropTypes.string,
    showLoader: React.PropTypes.bool,
    isRounded: React.PropTypes.bool,
    loadingText: React.PropTypes.string
};

MPrimaryButton.defaultProps = {
    buttonText: 'Button',
    fullWidth: false,
    disabled: false,
    width: 'auto',
    showLoader: false,
    loadingText: "Loading...",
    isRounded: true
};

module.exports = Radium(MPrimaryButton);
