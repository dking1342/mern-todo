import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listTodos } from '../actions/TodoActions';
import Loading from './Loading';
import Message from './Message';
import Todo from './Todo';


const TodoList = () => {

    const dispatch = useDispatch();
    const todoList = useSelector(state=> state.todoLists);
    let { loading, error, todos } = todoList;
    const filteredArr = useSelector(state=> state.filterTodos);
    let {filtered } = filteredArr;

    useEffect(()=>{
        dispatch(listTodos(filtered))
    },[dispatch,filtered])

    return(
        <section className="todoList">
            { 
                loading ? (
                        <Loading />
                    ) 
                    : error ? (
                        <Message variant="danger" error={error}></Message>
                    )
                    : (
                        <>
                            {
                                todos.map((item,i)=>{
                                    return <Todo 
                                        key={item._id}
                                        data={item}
                                    />
                                })    
                            }
                        </>
                    )
            }
        </section>
    )
}

export default TodoList
