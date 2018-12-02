import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
import axios from 'axios'

//  修改input框内值的action方法
export const getInputChangeAction = (value) => ({
	type:CHANGE_INPUT_VALUE,
	value
})

//  添加todoList值的action方法
export const getAddItemAction = () => ({
	type:ADD_TODO_ITEM,
})

//  删除todoList值的action方法
export const getDeleteItemAction = (index) => ({
	type:DELETE_TODO_ITEM,
	index
})

// 异步获取List值的action方法
export const getInitListAction = (data) => ({
	type:INIT_TODO_LIST,
	data
})

export const getTodoList = () => {
	return (dispatch) => {
		axios.post('https://easy-mock.com/mock/5bae242d346f071866acba5b/example/initlist')
		.then((res) => {
			let data = res.data.data;
			const action = getInitListAction(data);
			dispatch(action);
		})
		.catch((err) => {
			console.log(err);
		})
	}
}
