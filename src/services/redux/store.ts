import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware: SagaMiddleware<object> = createSagaMiddleware();
const reducer = rootReducer;
const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(rootSaga);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;