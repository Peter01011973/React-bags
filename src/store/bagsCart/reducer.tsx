import {produce} from 'immer';
import { cartInitStateI } from './interfaces';
import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART } from './types';

const initialState: cartInitStateI = {
    bags: [],
}

const cartReducer = produce((draft: cartInitStateI = initialState, action: any) => {
    const {type, payload} = action; 
    // let index;
    const index = draft.bags.findIndex(item => payload.id === item.id);
    switch (type) {
        // case FETCH_POST: return {...draft, isLoading: true};
        // case ADD_POSTS: return {...draft, posts: [...payload], isLoading: false};
        case ADD_TO_CART: 
            const newObj = { ...payload };
            if (index === -1) {
                newObj.inCart = 1;
                return { ...draft, bags: [...draft.bags, newObj] };
            } else {
                draft.bags[index].inCart = draft.bags[index].inCart as number + 1;
                return draft
            } 
        case REMOVE_FROM_CART: 
            if (index === -1) return draft;
            if (draft.bags[index].inCart === 1) {
                draft.bags.splice(index,1); 
                return draft; 
            } else {
                draft.bags[index].inCart = draft.bags[index].inCart as number - 1;
                return draft
            }
        case DELETE_FROM_CART: 
            if (index === -1) return draft;
            draft.bags.splice(index,1); 
            return draft; 
        // case DELETE_POST: return {...draft, posts: draft.posts.filter(post =>(post.id !== payload)), isLoading: false};
        // case UPDATE_POST: return {...draft, posts: draft.posts.map(post =>(post.id === payload.id ? payload : post)), isLoading: false};
        // case ERROR_POST: return {...draft, error: payload};
        // case CHANGE_POST_LIST_TOTAL_SIZE: return {...draft, postListTotalSize: payload};
        default: return draft;
    }
})

export default cartReducer;