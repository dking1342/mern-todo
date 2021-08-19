import { TODO_FILTER_REQUEST, TODO_FILTER_SUCCESS } from "../constants/FilterConstants";


export const filterTodo = (filter) => async(dispatch) => {
    dispatch({
        type:TODO_FILTER_REQUEST
    })
    dispatch({
        type:TODO_FILTER_SUCCESS,
        payload: !filter
    })
}