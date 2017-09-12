const React = require('react');
const ReactRouter = require('react-router');
const { Promise } = global;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const browserHistory = ReactRouter.browserHistory;
import * as ENV from "./config/env";
import * as Analytics from "./config/analytics";
import * as VALUES from "./config/values";

if (typeof require.ensure !== "function") require.ensure = function (d, c) { c(require) };

export const HOME = "/";
export const ALL = '*';

export function getRoutes(isMobileDevice) {
    if (!isMobileDevice) {
        return (
            <Router history={browserHistory} onEnter={Analytics.logPageView()}>
                <Route path={HOME} getComponent={(nextState, callback) => {
                    callback(null, require('./containers/home/AsyncHome.js').default);
                }} />


                <Route path={ALL} getComponent={(nextState, callback) => {
                    callback(null, require('./containers/notFound/AsyncNotFound.js').default);
                }} />
            </Router >)

    } else {
        return (<Router history={browserHistory} onEnter={Analytics.logPageView()}>
            <Route path={HOME} getComponent={(nextState, callback) => {
                callback(null, require('./containers/home/MAsyncHome.js').default);
            }} />

            <Route path={ALL} getComponent={(nextState, callback) => {
                callback(null, require('./containers/notFound/MAsyncNotFound.js').default);
            }} />

        </Router >);
    }
};
