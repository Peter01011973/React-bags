import {createStore, applyMiddleware, combineReducers  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import bagsReducer from './bags/reducer';
import cartReducer from './bagsCart/reducer';
import rootSaga from './rootSaga';

const rootReducer = combineReducers({
    bags: bagsReducer,
    cart: cartReducer
});

export const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export type RootState = ReturnType<typeof rootReducer>

sagaMiddleware.run(rootSaga);

export default store;