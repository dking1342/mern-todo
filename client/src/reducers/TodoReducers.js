import { TODO_DELETE_FAIL, TODO_DELETE_SUCCESS, TODO_EDIT_FAIL, TODO_EDIT_REQUEST, TODO_EDIT_SUCCESS, TODO_LIST_FAIL, TODO_LIST_REQUEST, TODO_LIST_SUCCESS, TODO_POST_FAIL, TODO_POST_REQUEST, TODO_POST_RESET, TODO_POST_SUCCESS } from "../constants/TodoConstants";

export const TodoReducer = (state={loading:true,todos:[]},action) => {
    switch (action.type) {
        case TODO_LIST_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case TODO_LIST_SUCCESS:
            return{
                ...state,
                loading:false,
                todos:action.payload
            }            
        case TODO_LIST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const PostTodoReducer = (state={},action) => {
    switch (action.type) {
        case TODO_POST_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case TODO_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                newTodo: action.payload,
                error:''
            }
        case TODO_POST_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error
            }   
        case TODO_POST_RESET:
            return{
                ...state,
                error:'',
            }
        default:
            return state;
    }
}

export const EditTodoReducer = (state={},action) => {
    switch (action.type) {
        case TODO_EDIT_REQUEST:
            return{
                ...state,
                loading:true
            }
        case TODO_EDIT_SUCCESS:
            return{
                ...state,
                loading: false,
            }
        case TODO_EDIT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }      
        default:
            return state;
    }
}

export const DeleteTodoReducer = (state={},action)=>{
    switch (action.type) {
        case TODO_DELETE_SUCCESS:
            return{
                ...state,
                loading:false,
            }
        case TODO_DELETE_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }    
        default:
            return state;
    }
}