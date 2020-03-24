import {produce} from 'immer';
import { FilterI } from './interfaces';
import { ADD_FILTERS, START_ADDING_FILTER, SET_MIN_PRICE, SET_MAX_PRICE } from './types';

const initialState: FilterI = {
    pricesMM: {min: 0, max: 15000, minSet: -Infinity, maxSet: Infinity},
    brands: [],
    colors: [],
    prices: [],
    isLoading: false
}

const filterReducer = produce((draft: FilterI = initialState, action: any) => {
    const {type, payload} = action; 
    switch (type) {
        case ADD_FILTERS: return {...payload};
        case START_ADDING_FILTER: return {...draft, isLoading: true};
        case SET_MIN_PRICE: return {...draft, pricesMM: {...draft.pricesMM, minSet: +payload}};
        case SET_MAX_PRICE: return {...draft, pricesMM: {...draft.pricesMM, maxSet: +payload}}
        default: return draft;
    }
})
 
export default filterReducer;
