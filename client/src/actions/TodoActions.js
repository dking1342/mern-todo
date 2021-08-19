import { TODO_EDIT_FAIL, TODO_EDIT_SUCCESS, TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_DELETE_SUCCESS, TODO_DELETE_FAIL, TODO_POST_SUCCESS, TODO_POST_FAIL, TODO_POST_RESET } from "../constants/TodoConstants";


export const listTodos = (filter) => async(dispatch)=>{
    dispatch({
        type:TODO_LIST_REQUEST
    })
    try {
        const response = await fetch('http://localhost:5000/api/');
        const data = await response.json();

        if(filter){
            data.payload = data.payload.filter(item=> item.isCompleted !== true) 
        } 

        if(data.success){
            dispatch({
                type:TODO_LIST_SUCCESS,
                payload: data.payload
            })
        } else {
            dispatch({
                type: TODO_LIST_FAIL,
                error: data.payload
            })
        }        
    } catch (error) {
        dispatch({
            type:TODO_LIST_FAIL,
            error: error.message
        })
    }
}

export const editTodo = (id, status) => async(dispatch)=>{
    try {
        const options = {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({status}) // body data type must match "Content-Type" header
        }  
        const response = await fetch(`http://localhost:5000/api/update/${id}`,options);
        const data = await response.json();
    
        if(data.success){
            dispatch({
                type:TODO_EDIT_SUCCESS,
                payload: data.payload
            })
        } else {
            dispatch({
                type:TODO_EDIT_FAIL,
                payload: data.payload
            })
        }            
    } catch (error) {
        dispatch({
            type:TODO_EDIT_FAIL,
            payload:error.message
        })
    }
}

export const deleteTodo = (id) => async(dispatch) => {
    try {
        const options = {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: null // body data type must match "Content-Type" header
        }  
        const response = await fetch(`http://localhost:5000/api/delete/${id}`,options);
        const data = await response.json();

        if(data.success){
            dispatch({
                type:TODO_DELETE_SUCCESS,
                payload: data.payload
            })
        } else {
            dispatch({
                type:TODO_DELETE_FAIL,
                error: data.payload
            })
        }
    } catch (error) {
        dispatch({
            type:TODO_DELETE_FAIL,
            error: error.message
        })
    }
}

export const postTodo = (post) => async(dispatch) => {
    if(post === 'reset'){
        dispatch({
            type:TODO_POST_RESET
        })
    } else {
        try {
            const options = {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify({post}) // body data type must match "Content-Type" header
            }  
            const response = await fetch(`http://localhost:5000/api/add`,options);
            const data = await response.json();
    
            if(data.success){
                dispatch({
                    type:TODO_POST_SUCCESS,
                    payload: data.payload
                })
            } else {
                dispatch({
                    type:TODO_POST_FAIL,
                    error:data.payload
                })
            }
        } catch (error) {
            dispatch({
                type:TODO_POST_FAIL,
                error: error.message
            })
        }
    }

}

