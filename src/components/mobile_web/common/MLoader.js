import React from 'react'
import * as VALUES from '../../../config/values'

class MLoader extends React.Component {

    getStyles() {
        return ({

        });
    }

    render() {
        return <div>
            <div className="preloader-wrapper small active" style={{ height: 25, width: 25 }}>
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

MLoader.propTypes = {
    loaderColor: React.PropTypes.string
};

MLoader.defaultProps = {
    loaderColor: VALUES.COLORS.GREEN1
};


module.exports = MLoader;