import { all, fork } from '@redux-saga/core/effects';

import articlesSaga from './sagas/articles';
import currentArticleSaga from './sagas/currentArticle';
import topicsSaga from './sagas/topics';


export default function* rootSaga() {
    yield all([
        fork(articlesSaga),
        fork(currentArticleSaga),
        fork(topicsSaga)
    ]);
}