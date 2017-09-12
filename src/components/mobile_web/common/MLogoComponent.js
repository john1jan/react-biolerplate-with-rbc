import React from 'react'
// const logger = require('../../../config/logger')
import * as VALUES from '../../../config/values'
import * as ENV from '../../../config/env'
// import * as utils from '../../../config/utils'
import * as ROUTES from "../../../routes"


class MLogoComponent extends React.Component {
    getStyles() {
        return ({
            iconImg: {
                height: 36,
                marginLeft: 5,
                width: 130,
            }
        })
    }

    render() {
        const styles = this.getStyles();
        return (
            <div>
                <div className="col-s12" onClick={() => this.onLogoClick()} >
                    {this.props.imageColor === "light" ?
                        <img src={ENV.HOST + "/resources/logo.svg"} alt="Logo Light" style={styles.iconImg} />
                        : <img src={ENV.HOST + "/resources/logo.svg"} alt="Logo" style={styles.iconImg} />
                    }
                </div>
            </div>
        );
    }

    onLogoClick() {
        this.context.router.push(ROUTES.HOME);
    }

}

MLogoComponent.propTypes = {
    imageColor: React.PropTypes.string // light or dark
};

MLogoComponent.defaultProps = {
    imageColor: "light"
};

MLogoComponent.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = MLogoComponent;


