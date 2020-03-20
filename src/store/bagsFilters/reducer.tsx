import {produce} from 'immer';
import { FilterI } from './interfaces';
import { ADD_FILTERS, START_ADDING_FILTER } from './types';

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
        case START_ADDING_FILTER: return {...draft, isLoading: true}
        default: return draft;
    }
})

export default filterReducer;
