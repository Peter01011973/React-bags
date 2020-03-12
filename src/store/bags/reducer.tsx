import {produce} from 'immer';
import { bagsInitStateI } from './interfaces';
import { ADD_BAGS, FETCH_BAGS, ERROR_BAGS, CHANGE_BAGS_LIST_TOTAL_SIZE, CHANGE_CURRENT_PAGE, CHANGE_PAGE_SIZE } from './types';

const initialState = {
    bags: [],
    isLoading: false,
    error: false,
    pageSize: 5,
    currentPage: 1,
    bagsListTotalSize: 0
}

const bagsReducer = produce((draft: bagsInitStateI = initialState, action: any) => {
    const {type, payload} = action; 
    switch (type) {
        case FETCH_BAGS: return {...draft, isLoading: true};
        case ADD_BAGS: return {...draft, bags: [...payload], isLoading: false};
        // case ADD_POST: return {...draft, posts: [...draft.posts, payload], isLoading: false};
        // case DELETE_POST: return {...draft, posts: draft.posts.filter(post =>(post.id !== payload)), isLoading: false};
        // case UPDATE_POST: return {...draft, posts: draft.posts.map(post =>(post.id === payload.id ? payload : post)), isLoading: false};
        case ERROR_BAGS: return {...draft, error: true};
        case CHANGE_BAGS_LIST_TOTAL_SIZE: return {...draft, bagsListTotalSize: payload};
        case CHANGE_CURRENT_PAGE: return {...draft, currentPage: payload};
        case CHANGE_PAGE_SIZE: return {...draft, pageSize: payload}
        default: return draft;
    }
})

export default bagsReducer;