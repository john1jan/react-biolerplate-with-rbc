'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import * as ROUTES from "./routes";
import { getRoutes } from "./routes";
import DataWrapper from './components/DataWrapper'
import * as UrlHelper from "./config/url_helper";
import url from 'url';
import DocumentMeta from 'react-document-meta';
import compression from 'compression';
import * as VALUES from "./config/values";
import * as ENV from "./config/env";
import * as utils from "./config/utils"
import { readFileSync } from 'jsonfile';
const logger = require('./config/logger')
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import serialize from 'serialize-javascript'
const minifyHTML = require('express-minify-html');

console.log("ENV", ENV);

const app = new Express();
const server = new Server(app);
const mixPanelAnalyticsKey = VALUES.mixPanelAnalyticsKey;


// Enabling HTTPS redirection starts here
if (ENV.isProd || ENV.isPreProd) {
    app.use(requireHTTPS);
}

function requireHTTPS(req, res, next) {
    if (req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "http") {
        let webHost = ENV.HOST;
        return res.redirect(301, webHost + req.url);
    }
    next();
}
// Code for HTTPS redirection ends here


// getting hashed bundle file name from build-manifest.json

let manifest = null;
const manifestPath = `${process.cwd()}/src/static/js/build-manifest.json`;
manifest = readFileSync(manifestPath);

if (ENV.isDev) {
    // Step 1: Create & configure a webpack compiler
    let webpack = require('webpack');
    let webpackConfig = require('../webpack.config');
    let compiler = webpack(webpackConfig);

    console.log("public path", webpackConfig.output.publicPath);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}

if (!ENV.isDev) {
    // This code take any request of *app.css* and return gzipped version of that file with content encoding set to gzip
    // this code is currently gzipping only 1 file declared in head of ejs file

    app.get('*app.css*', function (req, res, next) {
        res.set('Content-Encoding', 'gzip');
        // app.use(compression())
        next();
    });
    // End of this code

    // This code take any request of *.js.gz and return gzipped version of that file with content encoding set to gzip
    // this code is currently gzipping only 3 files in body of ejs file
    // app.get('*bundle*', function (req, res, next) {
    // // req.url = req.url + '.gz';
    // res.set('Content-Encoding', 'gzip');
    // next();
    // });

    app.get('*platform.js*', function (req, res, next) {
        // req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });

    app.get('*medium.js*', function (req, res, next) {
        // req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });

    app.get('*sanitize.js*', function (req, res, next) {
        // req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });

    app.get('*highchart.js*', function (req, res, next) {
        // req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });

    app.get('*extra.js*', function (req, res, next) {
        // req.url = req.url + '.gz';
        res.set('Content-Encoding', 'gzip');
        next();
    });
    // End of this code

    app.use(minifyHTML({
        override: true,
        exception_url: false,
        htmlMinifier: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeAttributeQuotes: true,
            removeEmptyAttributes: true,
            minifyJS: true
        }
    }));
}



// initialize the server and configure support for ejs templates

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



// Code for enabling GZIP for only svg files
app.use(compression({ filter: shouldCompress }));
function shouldCompress(req, res) {
    let testHtml = req.url.charAt(0) == '/' && (req.url).search("otherJs") == -1 && (req.url).search("css") == -1 && (req.url).search("resources") == -1 && (req.url).search("manifest") == -1 && (req.url).search("browserconfig") == -1

    // compress if svg file
    if ((req.url).search(".svg") != -1) {
        return compression.filter(req, res) // fallback to standard filter function

        // compress if html file
    } else if (testHtml) {
        return compression.filter(req, res)
    } else {
        return false;
    }
}
// svg gzip code ends here



// app.use(compression())
// define the folder that will be used for static assets

// const oneDay = 86400000;
// app.use(Express.static(path.join(__dirname, 'static'), { maxAge: oneDay }));

const oneDay = 86400000;
const oneWeek = 604800000;

app.use(Express.static(path.join(__dirname, 'static'), {
    maxAge: oneWeek, setHeaders: function (res, path) {
        res.setHeader("Expires", new Date(Date.now() + oneWeek).toUTCString());
        res.setHeader("Connection", 'keep-alive')
    }
}));






app.get('/healthcheck', function (req, res) {
    res.status(200).send('Status 200 OK');
})



// universal routing and rendering
app.get('*', (req, res) => {
    let isMobileDevice = false;
    let isTabDevice = false;

    let str = req.headers["user-agent"];
    let searchString1 = "";
    let searchString2 = "";
    if (str != null && typeof str != 'undefined') {
        searchString1 = str.search("Mobi");
        searchString2 = str.search("Android");

    }

    if (!(searchString1 === -1) || !(searchString2 === -1)) {
        isMobileDevice = true;
    }


    match(
        { routes: getRoutes(isMobileDevice), location: req.url },
        (err, redirectLocation, renderProps) => {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }
            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }


            // above code ends here

            // this code for removing trailing slash with status 301 and redirecting to without slash
            let lastUrlChar = req.url.substr(-1);
            // home page route is typical so lets handle it first
            if (req.url.length == 1 && lastUrlChar == '/' && renderProps.routes[1].path.length == 1 && renderProps.routes[1].path == '/') {
                // dont do anything in this case
            } else if ((lastUrlChar.substr(-1) == '/' || lastUrlChar.substr(-1) == '\\') && renderProps.routes[1].path == '*') {
                // this is the path in which you have to show 404, so in this case dont bother with redirection
            } else if (lastUrlChar.substr(-1) == '/' || lastUrlChar.substr(-1) == '\\') {
                return res.redirect(301, ENV.HOST + req.url.substring(0, req.url.length - 1));
            }
            // code for removing trailing slashed finished


            // generate the React markup for the current route
            // let markup = "";
            if (renderProps) {
                // if the current route matched we have renderProps
                let preloadedData = {
                    isMobileDevice: isMobileDevice,
                    data: []
                }

                switch (renderProps.routes[1].path) {
                    case ROUTES.HOME:
                        renderPage(res, false, false, isMobileDevice, preloadedData, renderProps, ['home.js'], [], []);
                        break;

                    default:
                        renderPage(res, true, false, isMobileDevice, preloadedData, renderProps, ['notFound.js'], [], []);
                        break;
                }
            }
        }
    );
});
/**
 * 
 * @param {*} res "res object"
 * @param {*} is404 "is the page 404 page " 
 * @param {*} isSSR "is the page Server side rendered "
 * @param {*} isMobileDevice "is the device is mobile"
 * @param {*} preloadedData "data to be sent to client"
 * @param {*} renderProps "render props"
 * @param {*} preloadRouteBased "js to load on preload tag"
 * @param {*} jsBeforeRouteBased "js to load before body tag"
 * @param {*} jsAfterRouteBased "js to load after bundle"
 */
function renderPage(res, is404, isSSR, isMobileDevice, preloadedData, renderProps, preloadRouteBased, jsBeforeRouteBased, jsAfterRouteBased) {
    let jsBundle = "";
    let jsVendor = "";
    let jsMeta = "";
    let jsBefore = "";
    let jsAfter = "";
    let jsCommon = "";
    let appCss = "";
    let preloadJs = "";
    let markup = "";
    let documentMeta = "";
    let asyncComponentState = "";

    if (!ENV.isDev) {
        jsBundle = "<script src=\"/js/" + manifest['bundle.js'] + "\"></script>\n";
        jsVendor = "<script src=\"/js/" + manifest['vendor.js'] + "\"></script>\n";
        jsMeta = "<script src=\"/js/" + manifest['meta.js'] + "\"></script>\n";
        jsBefore = "<script src=\"/otherJs/platform.js?v=" + VALUES.VERSION.PLATFORM_VERSION + "\"></script>\n";
        jsAfter = "<script src=\"/otherJs/extra.js?v=" + VALUES.VERSION.EXTRA_VERSION + "\" async></script>\n";
        appCss = "<link href=\"/css/app.css?v=" + VALUES.VERSION.CSS_VERSION + "\" rel=\"stylesheet\" />\n";
        preloadJs = "<link rel=\"preload\" href=\"/js/" + manifest['meta.js'] + "\" as=\"script\" />\n" +
            "<link rel=\"preload\" href=\"/js/" + manifest['vendor.js'] + "\" as=\"script\" />\n" +
            "<link rel=\"preload\" href=\"/js/" + manifest['bundle.js'] + "\" as=\"script\" />\n";

        let tempPreload = "";
        if (typeof preloadedData.error == 'undefined' || !preloadedData.error) {
            for (let i in preloadRouteBased) {
                if (isMobileDevice) {
                    let tempName = "m" + preloadRouteBased[i];
                    tempPreload = tempPreload + "<link rel=\"preload\" href=\"/js/" + manifest[tempName] + "\" as=\"script\" />\n"
                } else {
                    tempPreload = tempPreload + "<link rel=\"preload\" href=\"/js/" + manifest[preloadRouteBased[i]] + "\" as=\"script\" />\n"
                }
            }
            preloadJs = preloadJs + tempPreload;
        }

        let tempJsBefore = "";
        for (let i in jsBeforeRouteBased) {
            tempJsBefore = tempJsBefore + "<script src=\"/otherJs/" + jsBeforeRouteBased[i] + "\" async></script>\n"
        }
        jsBefore = jsBefore + tempJsBefore

        let tempJsAfter = "";
        for (let i in jsAfterRouteBased) {
            tempJsAfter = tempJsAfter + "<script src=\"/otherJs/" + jsAfterRouteBased[i] + "\" async></script>\n"
        }
        jsAfter = jsAfter + tempJsAfter;


        if (isMobileDevice) {
            jsCommon = "<script src=\"/js/" + manifest['mcommon.js'] + "\"></script>";
            preloadJs += "<link rel=\"preload\" href=\"/js/" + manifest['mcommon.js'] + "\" as=\"script\" />\n";
        } else {
            jsCommon = "<script src=\"/js/" + manifest['common.js'] + "\"></script>";
            preloadJs += "<link rel=\"preload\" href=\"/js/" + manifest['common.js'] + "\" as=\"script\" />\n";
        }
    } else {
        jsBundle = "<script src=\"/js/bundle.js\"></script>\n";
        jsBefore = "<script src=\"/otherJs/source/platform.js\"></script>\n";
        jsAfter = "<script src=\"/otherJs/source/extra.js\" async></script>";
        appCss = "<link href=\"/css/source/app.css\" rel=\"stylesheet\" />\n";
    }



    if (isSSR) {
        // Render Server side pages
        const asyncContext = createAsyncContext();
        // 👇 Ensure you wrap your application with the provider.
        const app = (
            <AsyncComponentProvider asyncContext={asyncContext}>
                <DataWrapper data={preloadedData}><RouterContext {...renderProps} /></DataWrapper>
            </AsyncComponentProvider>
        )
        asyncBootstrapper(app).then(() => {
            // We can now render our app 👇
            markup = renderToString(app)

            // Get the async component state. 👇
            const asyncState = asyncContext.getState()

            documentMeta = DocumentMeta.renderAsHTML();
            asyncComponentState = serialize(asyncState);

            if (is404) {
                res.status(404);
            }

            return res.render('index', {
                mixPanelAnalyticsKey,
                preloadedData: JSON.stringify(preloadedData),
                jsBundle,
                jsVendor,
                jsMeta,
                jsBefore,
                jsAfter,
                jsCommon,
                appCss,
                preloadJs,
                markup,
                documentMeta,
                asyncComponentState,
            });
        })
    }
    else {
        //Renders Normal Pages
        if (is404) {
            res.status(404);
        }
        return res.render('index', {
            mixPanelAnalyticsKey,
            preloadedData: JSON.stringify(preloadedData),
            jsBundle,
            jsVendor,
            jsMeta,
            jsBefore,
            jsAfter,
            jsCommon,
            appCss,
            preloadJs,
            markup,
            documentMeta,
            asyncComponentState,
        });
    }
}

// start the server
const port = process.env.PORT || 3001;
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info("Server running on" + ENV.HOST);
});

server.on('connection', function (socket) {
    socket.setTimeout(10 * 1000);
    // 10 second timeout. Change this as you see fit.
})
