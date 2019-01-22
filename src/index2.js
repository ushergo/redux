import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'

import App2 from './App2';

import {reducer, addCanno, removeCanno} from './redux2/redux2'

let store = createStore(reducer)

function render() {
    console.log(store.getState());
    ReactDOM.render(
        <App2
            store={store}
            add={addCanno}
            remove={removeCanno}
        />, document.getElementById('root')
    );
}

render();
//监听，当组件触发dispatch函数改变了state时，会调用该监听订阅事件，重新渲染一次组件
store.subscribe(render)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
