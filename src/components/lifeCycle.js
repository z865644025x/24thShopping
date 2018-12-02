import React,{ Component } from 'react';

class lifeCycle extends Component{
	
	// 组件被挂载之前，自动被执行
	componentWillMount(){
		console.log("这个时候，组件准备被挂载，还没有被挂载！");
	}

	render(){
		return (
			<div>这里是生命周期的神奇探测！</div>
		)
	}

	// 组件被挂载之后，自动被执行
	componentDidMount(){
		console.log("这个时候，组件已经被挂载，可以获取到Dom！");
	}

	// 组件被更新之前，会自动被执行
	shouldComponentUpdate(){
		console.log("这个时候，是组件被更新之前！");
		return true
	}

	// 组件被更新之前，会自动执行，但是在shouldComponentUpdate，如果shouldComponentUpdate返回false，将不会被执行，否则将会被执行！
	componentWillUpdate(){
		console.log("这个时候，组件将要被更新，还没有更新！");
	}

	// 组件被更新之后，将会自动执行
	componentDidUpdate(){
		console.log("这个时候，组件已经被更新完！");
	}

	// 组件被销毁时，将会自动执行！
	componentWillUnmount(){
		console.log("这个时候，组件将要被销毁掉！");
	}

	// 一个组件要从父组件接受参数
	// 如果这个组件第一次存在于父组件中，不会执行
	// 如果这个组件之前已经存在于父组件中，才会被执行！
	componentWillReceiveProps(){
		console.log("这个时候，是第二次改变父组件的render，然后就被执行了。")
	}

}

export default lifeCycle; 
