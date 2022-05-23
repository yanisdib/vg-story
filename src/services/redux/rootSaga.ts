import { all, fork } from '@redux-saga/core/effects';

import articlesSaga from './sagas/articles';


export default function* rootSaga() {
    yield all([
        fork(articlesSaga)
    ]);
}