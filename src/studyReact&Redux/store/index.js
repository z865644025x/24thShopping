
// 相当于图书馆管理员
// 它并不能记住想要得到的东西,所以要为他创建笔记本也就是 => reducer.js

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store  = createStore( reducer, enhancer );

export default store;