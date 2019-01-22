import React, {Component} from 'react';


class App extends Component {
    render() {
        let store = this.props.store
        let add = this.props.add
        let remove = this.props.remove
        let async = this.props.async
        return (
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
        );
    }
}

export default App;
