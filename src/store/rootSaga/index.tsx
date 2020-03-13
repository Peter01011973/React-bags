import {put, call, takeEvery} from 'redux-saga/effects';
import { ADD_BAGS_SAGA } from '../bags/types';
import { getBags } from '../../services/bagsService';
import { fetchPost, addBags, errorBags, changeBagsListTotalSize } from '../bags/actions';

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

export default function* rootSaga() {
    yield takeEvery(ADD_BAGS_SAGA, fetchBagsAsync);
}