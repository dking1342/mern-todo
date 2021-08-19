import { TODO_FILTER_FAIL, TODO_FILTER_REQUEST, TODO_FILTER_SUCCESS } from "../constants/FilterConstants";

export const FilteredTodosReducer = (state={loading:false,filtered:false},action) => {
    switch (action.type) {
        case TODO_FILTER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case TODO_FILTER_SUCCESS:
            return{
                ...state,
                loading:false,
                filtered: action.payload
            }
        case TODO_FILTER_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}