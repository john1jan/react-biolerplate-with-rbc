// Container common styles
import * as VALUES from '../config/values'

const styles = {
    getFont: {
        fontFamily: 'Roboto',
        // WebkitFontSmoothing: 'antialiased'
    },
    baseContainerDesktop: {
        fontFamily: 'Roboto',
        // WebkitFontSmoothing: 'antialiased',
        width: '100%',
        maxWidth: VALUES.SIZES.PAGE_MAX_WIDTH
    }
}

module.exports = styles;