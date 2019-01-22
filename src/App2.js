import React, {Component} from 'react';

class App extends Component {
    render() {
        let store = this.props.store
        let add = this.props.add
        let remove = this.props.remove
        return (
            <div className="App">
                <input type={'button'} defaultValue={'添加坦克炮'} onClick={() => {
                    store.dispatch(add())
                }}/>
                <input type={'button'}  defaultValue={'减少坦克炮'} onClick={() => {
                    store.dispatch(remove())
                }}/>
            </div>
        );
    }
}

export default App;
