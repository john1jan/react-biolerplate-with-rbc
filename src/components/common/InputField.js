import React from 'react'
const Radium = require('radium');
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'


class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      disabled: false,
      placeholder: "",
      errormessage: "",
      type: "text",
      maxlength: "250",
      prefixActive: false,
      centerAlign: false
    }
  }


  getStyles() {
    return (
      {
        container: {
          width: this.props.fullWidth ? '100%' : this.props.width,
          textAlign: this.props.centerAlign ? 'center' : 'left',
          fontSize: this.props.fontSize,
          boxShadow: "0",
          padding: 2,
          margin: 0
        },

        inputTag: {
          border: "none",
          margin: 0,
          height: "auto",
          fontSize: this.props.fontSize,
          'focus': {
            boxShadow: "none !important",
          }
        },

        inputActive: {
          width: this.props.fullWidth ? '100%' : this.props.width,
          outline: 'none',
          textAlign: 'left',
          fontSize: this.props.fontSize,
          boxShadow: "none",
          margin: 0,
          borderBottom: this.props.borderBottom === 'none' ? 'none' : this.props.autofocus ? '2px solid ' + VALUES.COLORS.GREEN1 : '2px solid ' + VALUES.COLORS.GREY3,
          color: this.props.textColor != VALUES.COLORS.BLUE6 ? this.props.textColor : VALUES.COLORS.BLUE6,
          ':focus': {
            borderBottom: this.props.borderBottom === 'none' ? 'none' : '2px solid ' + VALUES.COLORS.GREEN1,
            boxShadow: "none !important",
          }
        },

        inputError: {
          width: this.props.fullWidth ? '100%' : this.props.width,
          borderBottom: '2px solid ' + VALUES.COLORS.RED1,
          color: this.props.textColor != VALUES.COLORS.BLUE6 ? this.props.textColor : VALUES.COLORS.BLUE6,
          fontSize: this.props.fontSize,
          boxShadow: "none"
        },

        inputDisabled: {
          width: this.props.fullWidth ? '100%' : this.props.width,
          borderBottom: '2px solid ' + VALUES.COLORS.GREY3,
          color: VALUES.COLORS.GREY3,
          cursor: 'not-allowed',
          fontSize: this.props.fontSize,
        },

        errorMessage: {
          color: VALUES.COLORS.RED1,
          margin: 0
        },

        prefix: {
          borderBottom: '2px solid ' + VALUES.COLORS.GREY3,
          fontSize: this.props.fontSize,
          margin: 0,

        },
        prefixFocus: {
          borderBottom: '2px solid ' + VALUES.COLORS.GREEN1,
          margin: 0,
          fontSize: this.props.fontSize,
        },
        prefixError: {
          borderBottom: '2px solid ' + VALUES.COLORS.RED1,
          margin: 0,
          fontSize: this.props.fontSize,
        },
        prefixDisabled: {
          borderBottom: '2px solid ' + VALUES.COLORS.GREY3,
          margin: 0,
          color: VALUES.COLORS.GREY1,
          fontSize: this.props.fontSize,
        }
      })
  }

  render() {
    let styles = this.getStyles();
    let inputStyle = "";
    let prefixStyle = styles.prefix;
    inputStyle = styles.inputActive;

    if (this.state.prefixActive) {
      prefixStyle = styles.prefixFocus
    } else {
      prefixStyle = styles.prefix
    }
    if (this.props.error) {
      inputStyle = styles.inputError;
      prefixStyle = styles.prefixError;
    } else if (this.props.disabled) {
      inputStyle = styles.inputDisabled;
      prefixStyle = styles.prefixDisabled;
    }


    return (
      <div style={styles.container}>
        <div className="valign-wrapper">
          {this.props.prefix ? <div style={prefixStyle}>{this.props.prefixText}</div> : null}
          <div style={inputStyle}>
            <input id={this.props.id}
              pattern={this.props.pattern}
              onInput={this.props.onInput}
              type={this.props.type} placeholder={this.props.placeholder}
              disabled={this.props.disabled ? "disabled" : false}
              autoFocus={this.props.autofocus === true ? "autofocus" : false}
              onFocus={() => this.onInputFocus()}
              onBlur={() => this.onInputBlur()}
              value={this.props.value} maxLength={this.props.maxlength}
              onKeyUp={(e) => this.onKeyUp(e)}
              style={{ textAlign: this.props.centerAlign ? 'center' : 'left' }}
            />
          </div>
        </div>
        {
          this.props.error ?
            <h6 style={styles.errorMessage}>{this.props.errormessage}</h6>
            : null
        }
      </div>
    );
  }

  //Click Methods and othe user defined methods

  onKeyUp(event) {
    if (event.keyCode == 13) {
      this.props.onEnterPress();
      return false; // returning false will prevent the event from bubbling up.
    }
    else if (event.keyCode == 8) {
      if (this.props.onBackspace) {
        this.props.onBackspace();
        return false
      }
    }
    else {
      return true;
    }
  }

  // getFocus() {
  //   $('#active').focus();
  // }

  onInputFocus() {
    this.setState({ prefixActive: true })
  }

  onInputBlur() {
    this.setState({ prefixActive: false })

  }

}

InputField.propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  disabled: React.PropTypes.bool,
  error: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  errormessage: React.PropTypes.string,
  onInput: React.PropTypes.func.isRequired,
  type: React.PropTypes.string,
  maxlength: React.PropTypes.string,
  width: React.PropTypes.string,
  onEnterPress: React.PropTypes.func,
  fullWidth: React.PropTypes.bool,
  fontSize: React.PropTypes.string,
  prefix: React.PropTypes.bool,
  autofocus: React.PropTypes.bool,
  borderBottom: React.PropTypes.string,
  id: React.PropTypes.string,
  textColor: React.PropTypes.string,
  prefixText: React.PropTypes.string,
  pattern: React.PropTypes.string,
  centerAlign: React.PropTypes.string
};

InputField.defaultProps = {
  text: '',
  placeholder: "",
  fullWidth: false,
  borderBottom: '2px solid ' + VALUES.COLORS.GREEN1,
  disabled: false,
  fontSize: VALUES.SIZES.LARGE,
  textColor: VALUES.COLORS.BLUE6,
  id: '',
  width: "",
  prefix: false,
  autofocus: false,
  prefixText: "+91",
  pattern: "",
  centerAlign: false
};


module.exports = Radium(InputField);




// render earlier
{/*<div style={styles.container}>
        {this.props.autofocus ? this.getFocus() : null}
        {this.props.prefix ? <span style={this.state.prefixActive ? styles.prefixFocus : styles.prefix}>+91</span> : null}
        <input id='active' style={inputStyle}
          onInput={this.props.onInput}
          type={this.props.type} placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : false}
          value={this.props.value} maxLength={this.props.maxlength}
          onFocus={() => this.onInputFocus()}
          onBlur={() => this.onInputBlur()}
          onKeyPress={(e) => this.onKeyPress(e)}
        />
        {
          this.props.error ?
            <h6 style={styles.errorMessage}>{this.props.errormessage}</h6>
            : null
        }
      </div>*/}