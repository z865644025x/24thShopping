import React, { Component } from 'react';
import { Button,List,Input } from 'antd';
// 第二个核心API:connect 
// 通过connect方法获取store中的内容
import { connect } from 'react-redux'
import './App.css';

class TodoList extends Component{
  // constructor(props){
  //   super(props);
  // }

  handleDelectItem(index){
    console.log(index);
  };

  render() {
    return (
      <div style={{padding:'10px'}}>
        <Input 
          style={{marginTop:'10px',width:'300px',marginRight:'10px'}}
          value={this.props.inputValue}
          placeholder='Todo List'
          onChange={this.props.changeInputValue}
        ></Input>
        <Button type="primary">提交</Button>
        <List
          style={{width:'300px',marginTop:'15px'}}
					bordered
					dataSource={this.props.list}
          renderItem={(item , index) => (<List.Item onClick={this.handleDelectItem.bind(this,index)}>{item}</List.Item>)}
        >
        </List>
        <span>This is TodoList UI Component.</span>
      </div>
    )
  }
}

// state做映射 
// 将state映射到props
const mapStateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}
// store.dispatch 挂载到props上面
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      console.log(e.target.value);
    }
  }
}
// export default TodoList;

// 让TodoList和store做链接
// 连接的规则就是mapStateToProps这个方法
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)