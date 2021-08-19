import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { FilteredTodosReducer } from '../reducers/FilterReducers';
import { DeleteTodoReducer, EditTodoReducer, PostTodoReducer, TodoReducer } from '../reducers/TodoReducers';

// reducers

// initial state
const initialState = {
}

const reducer = combineReducers({
    todoLists: TodoReducer,
    filterTodos: FilteredTodosReducer,
    postTodo: PostTodoReducer,
    editTodo: EditTodoReducer,
    deleteTodo: DeleteTodoReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// store init
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;