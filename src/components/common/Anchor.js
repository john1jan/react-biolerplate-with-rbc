import React from 'react'
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import Radium from "radium";

class Anchor extends React.Component {

    getStyles() {
        return ({
            anchorElement: {
                cursor: "pointer",
                color: this.props.textColor,
                fontSize: "inherit",
                ':hover': {
                    color: VALUES.COLORS.GREEN2
                }
            }
        })
    }
    render() {
        const styles = this.getStyles();
        return <a style={styles.anchorElement} href={this.props.href} target={this.props.openInNewTab ? "_blank" : "_self"}>{this.props.anchorText}</a>;
    }
}

Anchor.propTypes = {
    link: React.PropTypes.string,
    anchorText: React.PropTypes.string,
    openInNewTab: React.PropTypes.bool,
    textColor: React.PropTypes.string
};

Anchor.defaultProps = {
    link: ENV.HOST,
    anchorText: "",
    openInNewTab: false,
    textColor: VALUES.COLORS.BLACK1
};


module.exports = Radium(Anchor);