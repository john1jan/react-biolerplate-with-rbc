
import React from 'react'
const logger = require('../../config/logger')
import * as VALUES from '../../config/values'
import * as ENV from '../../config/env'
import * as utils from '../../config/utils'
import * as Analytics from '../../config/analytics'
import * as ROUTES from "../../routes"


class LogoComponent extends React.Component {

    constructor(props) {
        super(props);
    }


    getStyles() {
        return ({
            iconText: {
                fontSize: 25,
                color: this.props.fontColor,
                WebkitFontSmoothing: 'antialiased'
            },
            iconImg: {
                height: 50,
                margin: 0,
                padding: 0
            }
        })
    }

    render() {
        const styles = this.getStyles();
        return (
            <div style={{ minWidth: 261 }}>
                <div className="valign-wrapper" style={{ height: 50, cursor: "pointer" }} onClick={() => this.onLogoClick()} >
                    {this.props.imageColor == 'dark' ?
                        <img className="valign responsive-img" alt="Logo" src={ENV.HOST + "/resources/logo.svg"} style={styles.iconImg} />
                        : <img className="valign responsive-img" alt="Logo Light" src={ENV.HOST + "/resources/logo.svg"} style={styles.iconImg} />
                    }
                    <div style={styles.iconText}>
                        {this.props.logoText}
                    </div>
                </div>
            </div>
        );
    }

    onLogoClick() {
        this.context.router.push(ROUTES.HOME);
    }

}

LogoComponent.propTypes = {
    fontColor: React.PropTypes.string,
    imageColor: React.PropTypes.string,
    logoText: React.PropTypes.string
};

LogoComponent.defaultProps = {
    fontColor: VALUES.COLORS.WATERLOO,
    imageColor: 'dark',// accepted values - dark and light
    logoText: "React Biolerplate"
};

LogoComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};


module.exports = LogoComponent;


