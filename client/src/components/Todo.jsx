import React, { } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, listTodos } from '../actions/TodoActions';


const Todo = (props) => {
    let { todo, isCompleted, _id } = props.data;

    const filteredArr = useSelector(state=> state.filterTodos);
    const { filtered } = filteredArr;

    const dispatch = useDispatch();
    const editHandler = (id, status) => {
        let output = !status
        dispatch(editTodo(id, output))
        dispatch(listTodos(filtered))
    }

    const deleteHandler = (id) => {
        dispatch(deleteTodo(id))
        dispatch(listTodos(filtered))
    }

    return (
        <div className="todo">
            <p className={ isCompleted ? 'completed' : 'pending'}>{todo}</p>
            <div>
                <button className="btn btn-edit" onClick={()=> editHandler(_id, isCompleted)} >Status</button>
                <button className="btn btn-delete" onClick={()=> deleteHandler(_id)} >Delete</button>
            </div>
        </div>
    )
}

export default Todo
