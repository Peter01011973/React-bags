import {createStore, applyMiddleware, combineReducers, Reducer, CombinedState, AnyAction  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import bagsReducer from './bags/reducer';
import cartReducer from './bagsCart/reducer';
import rootSaga from './rootSaga';
import filterReducer from './bagsFilters/reducer';
import { FilterI } from './bagsFilters/interfaces';
import { cartInitStateI } from './bagsCart/interfaces';
import { bagsInitStateI } from './bags/interfaces';

const rootReducer: Reducer<CombinedState<{
    bags: bagsInitStateI;
    cart: cartInitStateI;
    filters: FilterI
}>, AnyAction> = combineReducers({
    bags: bagsReducer,
    cart: cartReducer,
    filters: filterReducer
});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RootState = {
    bags: bagsInitStateI;
    cart: cartInitStateI;
    filters: FilterI;
}

sagaMiddleware.run(rootSaga);

export default store;