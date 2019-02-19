import React, {Component} from 'react';

import {connect} from 'react-redux'
import {addCanno, removeCanno, addCannoAsync} from './redux3/redux3'

class App extends Component {
    render() {
        let num = this.props.num
        console.log(num);
        // let add = this.props.add
        // let remove = this.props.remove
        // let async = this.props.async
        return (
            <div className="App">
                <input type={'button'} defaultValue={'添加坦克炮'} onClick={this.props.addCanno}/>
                <input type={'button'} defaultValue={'减少坦克炮'} onClick={this.props.removeCanno}/>
                <input type={'button'} defaultValue={'异步添加坦克炮'} onClick={this.props.addCannoAsync}/>
            </div>
        );
    }
}

// 你的组件需要哪些状态值
// 组件中的状态值放到了reducer中，这里可以取出你想要用的！！！
const mapStateToProps = (state) => {
    return {
        num: state
    }
}

//自动分布action
//方法返回action， 组件内用 this.props.xxx调用
const mapDispatchToProps = { //也就是将dispatch分发到props上，不用在子组件中再次进行调用store.dispatch,直接调用props.action对象即可
    addCanno, removeCanno, addCannoAsync
}

App = connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
