import {connect} from 'react-redux';
import AddTodoForm from './AddTodoForm';
import { addTodo } from '../store/todos/actions';
import './form.css'

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);