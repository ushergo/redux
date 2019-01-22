import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//基本的redux支持，store，应用中间件
import {createStore, applyMiddleware} from 'redux'

// store提供器，优雅的使用action
import {Provider} from 'react-redux'

// 中间件，用于处理异步函数
import thunk from 'redux-thunk'

import App from './App';

import {reducer} from './redux3/redux3'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
