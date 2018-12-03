import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import TodoList from './TodoList';
// 第一个核心API:Procvider
// 连接store,使每一个组件都可以使用store中的值
// import { Provider } from 'react-redux';
// import store from './store';

// const App = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
