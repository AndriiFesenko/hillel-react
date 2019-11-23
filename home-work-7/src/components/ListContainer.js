import {connect} from 'react-redux';
import List from './List';
import { removeTodo, toggleTodo } from '../store/todos/actions';
import './todos.css'

// get state return props
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    removeTodo: removeTodo,
    toggleTodo: toggleTodo

}
// второй аргумент передаем компонент который обвязываем в контейнер
export default connect(mapStateToProps, mapDispatchToProps)(List);