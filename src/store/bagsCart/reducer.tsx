import {produce} from 'immer';
import { cartInitStateI } from './interfaces';

const initialState: cartInitStateI = {
    bags: [],
}

const cartReducer = produce((draft: cartInitStateI = initialState, action: any) => {
    const {type} = action; 
    switch (type) {
        // case FETCH_POST: return {...draft, isLoading: true};
        // case ADD_POSTS: return {...draft, posts: [...payload], isLoading: false};
        // case ADD_POST: return {...draft, posts: [...draft.posts, payload], isLoading: false};
        // case DELETE_POST: return {...draft, posts: draft.posts.filter(post =>(post.id !== payload)), isLoading: false};
        // case UPDATE_POST: return {...draft, posts: draft.posts.map(post =>(post.id === payload.id ? payload : post)), isLoading: false};
        // case ERROR_POST: return {...draft, error: payload};
        // case CHANGE_POST_LIST_TOTAL_SIZE: return {...draft, postListTotalSize: payload};
        default: return draft;
    }
})

export default cartReducer;