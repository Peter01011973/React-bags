import {put, call, takeEvery} from 'redux-saga/effects';
import { ADD_BAGS_SAGA } from '../bags/types';
import { getBags } from '../../services/bagsService';
import { fetchPost, addBags, errorBags, changeBagsListTotalSize } from '../bags/actions';

export function* fetchBagsAsync(action: any) {
    yield put(fetchPost())
    const result = yield call(getBags.bind(null,action.payload));    
    const { response, success, message } = result;
    if (success) { 
        yield put(addBags(response.data));
        yield put(changeBagsListTotalSize(+response.headers['x-total-count'])); 
    }
    else { yield put(errorBags(message)) }
}

export default function* rootSaga() {
    yield takeEvery(ADD_BAGS_SAGA, fetchBagsAsync);
}