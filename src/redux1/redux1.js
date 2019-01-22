import {createStore} from 'redux'

//2.reducer 定义你将来要做的事情(函数)
function reducer(state = 0, action) {
    switch (action.type) {
        case '加坦克炮':
            return state + 1
        case '减坦克炮':
            return state - 1
        default:
            return 100
    }
}

//1.新建store 数据管理仓库
const store = createStore(reducer)

//3.获取状态
console.log(store.getState());

function listener() {
    //这里面一般调用render（）函数，重新渲染组件，因为react是单向数据流绑定，当state改变了就需要重新render。
    //而redux给我们一个subscribe监听接口，可以自动的帮我们实现重新render（）
    let num = store.getState();
    console.log('现在有' + num + '辆坦克炮，相当于是监听到state发生了改变，这里你可以调用render函数了');
}

//订阅（监听dispath的触发，一旦触发dispatch则会调用该订阅的函数）
//如果是在触发dispathc之后订阅，那么是无效的
store.subscribe(listener)

//派发事件调用reducer、传递action
store.dispatch({type: '加坦克炮'})
console.log(store.getState());

store.dispatch({type: '减坦克炮'})
console.log(store.getState());

//订阅发布设计模式
