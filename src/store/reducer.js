import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
// 相当于图书馆的记录本,
// 在Reducer.js中只需要返回一个函数,
// 在这个函数中

// 初始化笔记本中的数据
const defaultState = {
	inputValue:'',
	list:[ ]
} 

// reducer 可以接受state 但是绝对不能修改state
// 纯函数指的是：给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用！
export default (state = defaultState,action) => {
	if(action.type === CHANGE_INPUT_VALUE){
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState
	}
	if(action.type === INIT_TODO_LIST){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list = action.data;
		return newState
	}
	if(action.type === ADD_TODO_ITEM){
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState
	}
	if(action.type === DELETE_TODO_ITEM){
		// 因为不能修改state，所以需要将oldstate里面的值赋值给newState
		// action可以理解为传进来的参数值，可以根据action.name来调用不同的参数！
		const newState = JSON.parse(JSON.stringify(state));
		newState.list.splice(action.index,1);
		return newState
	}
	return state
}