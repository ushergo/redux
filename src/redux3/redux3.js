const add = '加坦克炮'
const remove = '减坦克炮'

//2.reducer 定义你将来要做的事情(函数)，返回一个新的state =>该sate实际就是从组件中搬过来的state，换句话说该state返回给组件使用
//如APP.JS中的  this.props.num 是通过mapStateToProps 来使用的
export function reducer(state = 0, action) {
    switch (action.type) {
        case '加坦克炮':
            return state + 1
        case '减坦克炮':
            return state - 1
        default:
            return 100
    }
}

//返回命令对象
export function addCanno() {
    return {type: add}
}

//返回命令对象
export function removeCanno() {
    return {type: remove}
}

//返回处理异步请求的函数
export function addCannoAsync() {
    return dispatch => { // 这里的dispatch参数 中间件执行的时候会传递过来
       //模拟异步请求，延迟2秒执行
        setTimeout(() => {
            return dispatch(addCanno())
        }, 2000)
    }

}
