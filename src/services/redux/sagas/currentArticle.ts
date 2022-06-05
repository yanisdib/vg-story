import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { Article } from '../../../interfaces';

import { fetchArticleByPermalink } from '../../api/articles';

import {
    fetchCurrentArticleRequest,
    fetchCurrentArticleSuccess
} from '../slices/currentArticle/currentArticleSlice';


export function* fetchCurrentArticleSaga({ payload: permalink }: PayloadAction<string>) {
    try {

        const article: Article = yield call(fetchArticleByPermalink, permalink);

        if (article) {

            yield put(fetchCurrentArticleSuccess(article));
        }
        else {

            const error: Error = new Error(`This article does not exist.`);

            yield put({ type: 'articles/fetchCurrentArticleFailure', error });
        }
    } catch {

        const error: Error = new Error(`Unsuccessful request. Try again.`);

        yield put({ type: 'articles/fetchCurrentArticleFailure', error });
    }
}


export default function* currentArticleSaga() {
    
    yield takeLatest(
        fetchCurrentArticleRequest,
        fetchCurrentArticleSaga
    );
}