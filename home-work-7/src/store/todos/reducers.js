
import {TODOS_REMOVE_TODO, TODOS_TOGGLE_TODO, TODOS_ADD_TODO} from './actions';

const initialState = [
    {
        id: 1,
        title: 'title 1',
        isDone: false
    },
    {
        id: 2,
        title: 'title 2',
        isDone: false
    },
    {
        id: 3,
        title: 'title 3',
        isDone: true
    },
    {
        id: 4,
        title: 'title 4',
        isDone: false
    }
]

export default function(state = initialState, {type, payload}) {
    switch(type) {
        case TODOS_REMOVE_TODO:
            return state.filter((todo) => todo.id != payload)
        case TODOS_TOGGLE_TODO:
             return state.map((todo) => {
                if(todo.id == payload) {
                    todo.isDone = !todo.isDone
                }
                return todo
            })
        case TODOS_ADD_TODO:
            return [...state, {
                id: Date.now(),
                title: payload,
                isDone: false
            }]
    }
    return state;
}