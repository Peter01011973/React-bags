import {produce} from 'immer';
import { FilterI } from './interfaces';
import { ADD_FILTERS } from './types';

const initialState: FilterI = {
    pricesMM: {min: -Infinity, max: Infinity, minSet: -Infinity, maxSet: Infinity},
    brands: [],
    colors: [],
    prices: []
}

const filterReducer = produce((draft: FilterI = initialState, action: any) => {
    const {type, payload} = action; 
    switch (type) {
        case ADD_FILTERS: return {...payload}
        default: return draft;
    }
})

export default filterReducer;
