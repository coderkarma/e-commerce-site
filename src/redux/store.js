import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart} from './shop/shop.sagas'

import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

// Show loggers only in development not production
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store);
export default { store, persistor };
