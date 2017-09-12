'use strict';

import React from 'react';
import { render } from 'react-dom'
import DataWrapper from './components/DataWrapper';
import axios from 'axios';
import { Router, browserHistory } from 'react-router';
import { getRoutes } from './routes';
import { AsyncComponentProvider } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'


const preloadedData = JSON.parse(document.getElementById('preloadedData').textContent);

// const rehydrateState = document.getElementById('asyncComponentState').textContent;
// ReactDOM.render(
//     <DataWrapper data={preloadedData}>
//         <Router history={browserHistory} routes={routes} />
//     </DataWrapper>, document.getElementById('main')
// );

let isMobileDevice = false;
if (typeof document != "undefined") {
    const preloadedData = JSON.parse(document.getElementById('preloadedData').textContent);
    isMobileDevice = preloadedData.isMobileDevice;
}

// Get any "rehydrate" state sent back by the server
const rehydrateState = window.ASYNC_COMPONENTS_STATE

//   Ensure you wrap your application with the provider,
// and pass in the rehydrateState.
const app = (
    <AsyncComponentProvider rehydrateState={rehydrateState}>
        <DataWrapper data={preloadedData}>
            <Router history={browserHistory} routes={getRoutes(isMobileDevice)} />
        </DataWrapper>
    </AsyncComponentProvider>
)

//   We run the bootstrapper again, which in this context will
//   ensure that all components specified by the rehydrateState
// will be resolved prior to render.
asyncBootstrapper(app).then(() => {
    //  Render the app
    render(app, document.getElementById('main'))
});
