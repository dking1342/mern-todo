import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo } from '../actions/FilterActions';
import { listTodos, postTodo } from '../actions/TodoActions';
import Loading from './Loading';
import Message from './Message';

const TodoInput = () => {
    // state
    const [todo, setTodo] = useState('');

    const filterArray = useSelector(state=> state.filterTodos);
    let { filtered } = filterArray;
    const createdTodo = useSelector(state=> state.postTodo);
    let { loading, error } = createdTodo;

    const dispatch = useDispatch();
    const handleSubmit = () => {
        dispatch(postTodo(todo));
        dispatch(listTodos(filtered))
        setTodo('')
    }
    const handleFilter = () => {
        dispatch(filterTodo(filtered))
    }

    useEffect(()=>{
        if(error){
            setTimeout(() => {
                dispatch(postTodo('reset'))
            }, 4000);
        }
    },[dispatch,error])

    return (
        <section className="todoInput">
            {
                loading ? (
                    <Loading />
                )
                : error ? (
                    <Message error={error}></Message>
                ) 
                : (
                    <>
                        <input type="text" id="todo" value={ todo } onChange={e=> setTodo(e.target.value)} required placeholder="Enter todo" />
                        <button type="button" className="btn btn-submit" onClick={handleSubmit}>Add</button>
                        <button type="button" className="btn btn-submit" onClick={handleFilter}>Filter</button>
                    </>
                )
            }
        </section>
    )
}

export default TodoInput
