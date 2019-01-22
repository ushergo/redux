
//2.reducer 定义你将来要做的事情(函数)
export function  reducer(state= 0,action) {
    switch (action.type) {
        case '加坦克炮':
            return state+1
        case '减坦克炮':
            return state -1
        default:
            return 100
    }
}

export function addCanno (){
    return {type:'加坦克炮'}
}

export function removeCanno(){
    return {type:'减坦克炮'}
}

