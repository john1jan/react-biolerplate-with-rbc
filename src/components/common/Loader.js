import React from 'react'
import * as VALUES from '../../config/values'

class Loader extends React.Component {


    render() {
        return <div>
            <div className="preloader-wrapper small active" style={{ height: this.props.height, width: this.props.width }}>
                <div className="spinner-layer" style={{ borderColor: this.props.loaderColor }}>
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div >;
    }
}

Loader.propTypes = {
    loaderColor: React.PropTypes.string,
    height: React.PropTypes.number,
    width: React.PropTypes.number
};

Loader.defaultProps = {
    loaderColor: VALUES.COLORS.GREEN1,
    height: 36,
    width: 36

};


module.exports = Loader;