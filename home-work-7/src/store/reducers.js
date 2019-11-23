import { combineReducers } from 'redux';
import filterReducer from './filter/reducers';
import todosReducer from './todos/reducers';

// возвращает новую функцию , которая будет в зависимости от того 
// что пользователь хочет менять будет вызывать правильный reducer
export default combineReducers({
    filter: filterReducer,
    todos: todosReducer
})