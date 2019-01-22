《添加了通过中间件 redux-thunk 做异步操作》

首先在redux3中定义异步函数并返回一个函数：
export  function  addCannoAsync() {
    return dispatch =>{ // 这里的dispatch参数 中间件执行的时候会传递过来

        //这里模拟异步操作：延迟2秒执行
        setTimeout(()=>{
            return dispatch(addCanno())
        },2000)
    }
}

【开发步骤】：
要用首先需要安装以下东西

1.redux-thunk （允许在redux3中使用异步函数）：
cnpm i redux-thunk -S
-D 表示只在开发的时候用
-S 表示开发和发布后都要用
安装后在index.js中引入
import thunk  from 'redux-thunk'

2.在index.js中引入redux中的applyMiddleware (中间件)：
import {createStore,applyMiddleware} from 'redux'

3.在creteStore的时候传递中间件参数 绑定中间件异步函数即可：
let store = createStore(reducer,applyMiddleware(thunk))
在index.js中render的时候将那些命令对象（add,remove,async）传递给子组件App,然后在App中接受并使用：
ReactDOM.render(
        <App
            store={store}
            add={addCanno}
            remove={removeCanno}
            async = {addCannoAsync}
        />, document.getElementById('root')
);

4.在其他组件中平常方法调用即可，如下异步添加坦克炮：
 <div className="App">
                <input type={'button'} defaultValue={'添加坦克炮'} onClick={() => {
                    store.dispatch(add())
                }}/>
                <input type={'button'}  defaultValue={'减少坦克炮'} onClick={() => {
                    store.dispatch(remove())
                }}/>
                <input type={'button'}  defaultValue={'异步添加坦克炮'} onClick={() => {
                    // 这里的aync()返回的其实是一个函数 dispatch =>{ dispatch(command) } ，中间件会等待异步操作完毕后执行dispath（command）
                    // 而上面的那2个返回的都是命令对象直接执行了dispath
                    store.dispatch(async())
                }}/>
</div>


5.总结：
*   中间件 封闭了很多实用的方法
*   脚手架 环境
*   redux 处理异步 那么就需要用 redux-thunk
*   调试工具 vue devtools vuex devtools
拓展：在本项目的ReactReduxBugInstall文件夹中解压，给Chrome浏览器添加添加2个调试工具（在Chrome浏览器的扩展中添加已经下载的文件夹，并打开开发者模式）
介绍：这2个工具可以在Chrome浏览器的控制台中看到网页中的具体的组件 以及state,action等变量值
    react devtools
    redux devtools
    步骤：
    1.引入redux中的compose（组合）:
      import {createStore,applyMiddleware,compose} from 'redux'
    2.获取浏览器的调试接口
      let devTools = window.devToolsExtension ? window.devToolsExtension : () => {}
    3.使用组合函数将中间件和工具组合
      let store = createStore(reducer, compose(applyMiddleware(thunk), devTools))