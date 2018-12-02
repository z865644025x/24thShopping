import React, { Component } from 'react';
import { Input , Button , List } from 'antd';
import store from './store'
import './App.css';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreator'


class App extends Component {

	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		// 当store中的值改变的时候就会运行subscribe这个函数,然后就会修改本地存储的state。
		store.subscribe(this.handleStoreChange);
	}

	componentDidMount(){
		// 通过中间件thunl，使得actionCreator中的函数返回的不仅仅是一个对象，还可以返回一个函数
		// 然后这个时候使action等于返回的这个函数
		const action = getTodoList();
		// 在store调用dispatch的时候，action会自动的执行。
		store.dispatch(action);
	}

	handleStoreChange(){
		this.setState(store.getState());
	}

	handleInputChange(e){
		// 通过action和store产生联系
		// const action = {
		// 	type:CHANGE_INPUT_VALUE,
		// 	value:e.target.value,
		// };
		const action = getInputChangeAction(e.target.value);
		// 通过store.dispatch将消息传给store
		store.dispatch(action);
	}

	handleBtnClick(){
		const action = getAddItemAction();
		store.dispatch(action);
	}

	handleDelectItem(index){
		const action = getDeleteItemAction(index)
		store.dispatch(action);

	}
	
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
			// 		<Button type="primary">button</Button>
      //   </header>
			// </div>

			<div className="todoList">
				<Input 
					value={ this.state.inputValue }
					onChange={this.handleInputChange}
					style={{width:'300px',marginRight:'15px'}}
					placeholder="Todo List"></Input>
				<Button type="primary" onClick={this.handleBtnClick}>提交</Button>
				<List
					style={{width:'300px',marginTop:'15px'}}
					bordered
					dataSource={this.state.list}
					renderItem={(item , index) => (<List.Item onClick={this.handleDelectItem.bind(this,index)}>{item}</List.Item>)}
				></List>
			</div>
    );				
  }
}

export default App;
