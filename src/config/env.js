export let HOST = "";
export let API_HOST = "";
const logger = require('./logger')


console.log(
    "   ______                                                   \n" +
    "  /      \\                                                  \n" +
    " |  ₹₹₹₹₹₹\\   ______     ______    __   __   __   __   __   __  \n" +
    " | ₹₹ __\\₹₹  /      \\   /      \\  |  \\ |  \\ |  \\ |  \\ |  \\ |  \\ \n" +
    " | ₹₹|      |  ₹₹₹₹₹₹\\ |  ₹₹₹₹₹₹\\ | ₹₹ | ₹₹ | ₹₹ | ₹₹ | ₹₹ | ₹₹ \n" +
    " | ₹₹ \\₹₹₹₹ | ₹₹   \\₹₹ | ₹₹  | ₹₹ | ₹₹ | ₹₹ | ₹₹ | ₹₹ | ₹₹ | ₹₹ \n" +
    " | ₹₹__| ₹₹ | ₹₹       | ₹₹__/ ₹₹ | ₹₹_/ ₹₹_/ ₹₹ | ₹₹_/ ₹₹_/ ₹₹ \n" +
    "  \\₹₹    ₹₹ | ₹₹        \\₹₹    ₹₹  \\₹₹   ₹₹   ₹₹  \\₹₹   ₹₹   ₹₹ \n" +
    "   \\₹₹₹₹₹₹   \\₹₹         \\₹₹₹₹₹₹    \\₹₹₹₹₹\\₹₹₹₹    \\₹₹₹₹₹\\₹₹₹₹        ♥'s  Investing"
);

logger.log("process.env.NODE_ENV ", process.env.NODE_ENV);
logger.log("host ", HOST);


if (process.env.NODE_ENV == "dev") {
    HOST = "http://localhost:3001";
    API_HOST = "http://dev.example.com";
} else if (process.env.NODE_ENV == "production") {
    HOST = "https://example.com";
    API_HOST = "https://example.api.com";
}

export const isDev = process.env.NODE_ENV == "dev";
export const isStage = process.env.NODE_ENV == "stage";
export const isPreProd = process.env.NODE_ENV == "preProd";
export const isProd = process.env.NODE_ENV == "production";
