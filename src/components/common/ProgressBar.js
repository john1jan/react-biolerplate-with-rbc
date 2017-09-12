import React from 'react'
import * as VALUES from '../../config/values'
class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    getStyles() {
        return {
            mainContainer: {
                borderRadius: 4,
                height: this.props.thickness,
                zIndex: 1,
                paddingLeft: 0,
                marginTop: 1,
                paddingRight: 0,
                background: '-webkit-linear-gradient(left, #79ff20 0%, #ffe800 49%, #ff4646 100%)',
                borderStyle: 'inset',
                border: this.props.backgroundColor ? '1px solid' + this.props.backgroundColor : '0px solid ' + VALUES.COLORS.GREY3
            },
            secondaryContainer: {
                zIndex: 3,
                height: this.props.thickness,
                borderRadius: '0 4px 4px 0',
                background: 'white',
                border: '0.5px solid rgb(225,235,235)',
                borderLeft: '0px',
                width: (100 - this.props.riskVal * 100 / 7) + '%'
            }
        }
    }

    render() {
        let styles = this.getStyles();
        return <div style={{ padding: 0 }}>
            <div style={styles.mainContainer}>
                <div className='right' style={styles.secondaryContainer}></div>
            </div>
        </div>
    }
}

ProgressBar.propTypes = {
    riskVal: React.PropTypes.number,
    thickness: React.PropTypes.number
};

ProgressBar.defaultProps = {
    riskVal: 2,
    thickness: 6
};
module.exports = ProgressBar;