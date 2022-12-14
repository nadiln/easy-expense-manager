import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../redux/reducers/index';
import sagas from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(sagas)

export default store;