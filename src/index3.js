import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {reducer, addCanno, removeCanno, addCannoAsync} from './redux3/redux3'

import App3 from './App3';


//开启调试工具，要重启浏览器才支持该扩展
/*
let devTools = window.devToolsExtension ? window.devToolsExtension : () => {}
let store = createStore(reducer,
    compose( //组合 中间件和调试工具
        applyMiddleware(thunk),
        devTools
    )
)
*/
let store = createStore(reducer, applyMiddleware(thunk))

function render() {
    console.log(store.getState());
    ReactDOM.render(
        <App3
            store={store}
            add={addCanno}
            remove={removeCanno}
            async={addCannoAsync}
        />, document.getElementById('root')
    );
}

render();
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
