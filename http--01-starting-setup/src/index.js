import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.interceptors.request.use(request => {
    console.log(request);
    // idea behind interceptor is you can add stuff here
    // like headers or paramaters
    // edit: interceptor
    return request;
}, error => {
    console.log(error);
    // handle the errror,
    // but need to promise.reject to forward the error
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(request);
    // idea behind interceptor is you can add stuff here
    // like headers or paramaters
    // edit: interceptor
    return request;
}, error => {
    console.log(error);
    // handle the errror,
    // but need to promise.reject to forward the error
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
