import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// interceptors for global axios configurations
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// axios.interceptors.request.use(request => {
//     console.log(request);
//     // idea behind interceptor is you can add stuff here
//     // like headers or paramaters
//     // edit: interceptor
//     return request;
// }, error => {
//     console.log(error);
//     // handle the errror,
//     // but need to promise.reject to forward the error
//     return Promise.reject(error);
// });

// axios.interceptors.response.use(response => {
//     console.log(request);
//     // idea behind interceptor is you can add stuff here
//     // like headers or paramaters
//     // edit: interceptor
//     return request;
// }, error => {
//     console.log(error);
//     // handle the errror,
//     // but need to promise.reject to forward the error
//     return Promise.reject(error);
// })

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
