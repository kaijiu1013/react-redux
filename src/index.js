import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import App from './components/App/App';
import reducers from './reducers'; // will grab index.js from that folder 

import './index.css';

// it is a high order function that take function as parameters, and then return a function as well
const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore); 
// it is same as below:
// const withMiddlwware = applyMiddleware(promiseMiddleware);
// const storeWithMiddleware = withMiddlwware(createStore);

ReactDOM.render(  
<Provider store={storeWithMiddleware(reducers)}>
    <App />
</Provider>
, document.getElementById('root')
);