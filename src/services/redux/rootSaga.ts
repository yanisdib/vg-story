import { all, fork } from '@redux-saga/core/effects';

import articlesSaga from './sagas/articles';
import currentArticleSaga from './sagas/currentArticle';


export default function* rootSaga() {
    yield all([
        fork(articlesSaga),
        fork(currentArticleSaga)
    ]);
}