import {put, call, takeEvery} from 'redux-saga/effects';
import { ADD_BAGS_SAGA } from '../bags/types';
import { getBags, getBagsForFilters } from '../../services/bagsService';
import { fetchPost, addBags, errorBags, changeBagsListTotalSize } from '../bags/actions';
import { ADD_FILTERS_SAGA } from '../bagsFilters/types';
import { BagI } from '../../interfaces';
import { BrandFilterI, ColorFilterI } from '../bagsFilters/interfaces';
import { addFilters, startAddingFilters } from '../bagsFilters/actions';

export function* fetchBagsAsync(action: any) {
    const {currentPage, pageSize, bagsInCart} = action.payload;
    yield put(fetchPost())
    const result = yield call(getBags.bind(null,{currentPage, pageSize}));    
    const { response, success, message } = result;
    if (success) { 
        yield put(addBags({bags: response.data, cart: bagsInCart}));
        yield put(changeBagsListTotalSize(+response.headers['x-total-count'])); 
    }
    else { yield put(errorBags(message)) }
}

export function* fetchBagsAndPrepareFiltersAsync() {
    yield put(startAddingFilters());
    const result = yield call(getBagsForFilters);    
    const { response, success, message } = result;
    if (success) {
        let max = -Infinity;
        let min = Infinity; 
        const brandsSet = new Set();
        const pricesSet = new Set();
        const brands: BrandFilterI[] = [];
        const colors: ColorFilterI[] = [];
        let prices: number[] = [];
        const colorSet = new Set();
        (response.data as BagI[]).forEach((bag: BagI) =>{
            const {color, brand, price} = bag;
            if (!brandsSet.has(brand)) {brandsSet.add(brand); brands.push({brand, filter: false})}
            if (!colorSet.has(color)) {colorSet.add(color); colors.push({color, filter: false})}
            if (!pricesSet.has(price)) {pricesSet.add(price); prices.push(price)}
            if (price > max) max = price;
            if (price < min) min = price;
          }  
        ); 
        prices = prices.sort((prev, next) => prev - next); 
        yield put(addFilters({pricesMM: {min, max}, brands, colors, prices, isLoading: false}));
        brandsSet.clear(); colorSet.clear(); pricesSet.clear();        
    }
    else { yield put(errorBags(message)) }
}

export default function* rootSaga() {
    yield takeEvery(ADD_FILTERS_SAGA, fetchBagsAndPrepareFiltersAsync);
    yield takeEvery(ADD_BAGS_SAGA, fetchBagsAsync);
}