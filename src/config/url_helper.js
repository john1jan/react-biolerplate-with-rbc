const React = require('react');
import axios from "axios";
import { getSessionId } from "./utils"
import * as ENV from "./env";



export const URL_STRINGS = {
    //APP API URLS
    GET_POSTS: ""

}

export var axiosInstance = axios.create({
    baseURL: ENV.API_HOST,
    headers: {
        'X-SESSION-ID': getSessionId()
    }
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['X-SESSION-ID'] = getSessionId();
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


export function getPosts() {
    return axiosInstance.get(URL_STRINGS.GET_POSTS);
}




