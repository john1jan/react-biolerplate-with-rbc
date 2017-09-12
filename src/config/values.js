import * as ENV from './env';
// COLORS used in  Components
export const COLORS = {
    darkPrimaryColor: '#7B1FA2',
    primaryColor: "#9C27B0",
    lightPrimaryColor: "#E1BEE7",
    textPrimaryColor: "#FFFFFF",
    accentColor: "#7C4DFF",
    primaryTextColor: "#212121",
    secondaryTextColor: "#757575",
    dividerColor: "#BDBDBD"
}





// SIZES used throught out the code
export const SIZES = {
    HEADER_TITLE_SIZE: '34px',
    HEADING_SIZE: '30px',
    HOME_CONVERSATION: '22px',

    EXTRA_LARGE: '42px',
    LARGE: '32px',
    BIG: '28px',
    MEDIUM: '24px',
    REGULAR: '22px',
    SMALL: '18px',
    SMALL_TINY: '16px',
    TINY: '14px',
    MINI: "12px",
    BUTTON_HEIGHT: '50px',

    MOBILE_EXTRA_LARGE: '20px',
    MOBILE_LARGE: '18px',
    MOBILE_BIG: '18px',
    MOBILE_MEDIUM: '16px',
    MOBILE_REGULAR: '14px',
    MOBILE_SMALL: '12px',
    MOBILE_SMALL_TINY: '10px',
    MOBILE_TINY: '8px',
    MOBILE_MINI: "6px",
    MOBILE_BUTTON_HEIGHT: '40px',

    PAGE_MAX_WIDTH: '1280px',
    PAGE_PADDING: '0 85px'
}

// KEYS/CONSTANTS used in the code
export const CONSTANTS = {
    SESSION_ID: 'SESSION_ID_NEW',
}

export const VERSION = {
    CSS_VERSION: "0.0.1",
    PLATFORM_VERSION: "0.0.1",
    EXTRA_VERSION: "0.0.1"
}




export let gaAnalyticsKey = '';
if (ENV.isDev || ENV.isStage) {
    gaAnalyticsKey = ''
} else if (ENV.isProd) {
    gaAnalyticsKey = ''
}
