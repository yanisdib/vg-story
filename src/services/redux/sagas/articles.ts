import { PayloadAction } from '@reduxjs/toolkit';
import {
    call,
    put,
    takeLatest
} from '@redux-saga/core/effects';

import { Article } from '../../../interfaces';
import { fetchArticles } from '../../api/articles';

import {
    fetchArticlesRequest,
    fetchArticlesSuccess,
    createArticleRequest,
    createArticleSuccess
} from '../slices/articles/articlesSlice';


export function* fetchArticlesSaga() {
    try {
        const articles: Article[] = yield call(fetchArticles);

        yield put(fetchArticlesSuccess(articles));
    } catch {
        const error: Error = new Error(`Unsuccessful request. Try again.`);

        yield put({ type: 'articles/fetchArticlesFailure', error });
    }
}

export function* createArticleSaga({ payload: article }: PayloadAction<Article>) {
    try {
        yield put(createArticleSuccess(article));
    } catch {
        const error: Error = new Error(`Unsuccessful request. Try again.`);

        yield put({ type: 'articles/createArticlesFailure', error });
    }
}

export default function* articlesSaga() {
    yield takeLatest(fetchArticlesRequest, fetchArticlesSaga);
    yield takeLatest(createArticleRequest, createArticleSaga);
}