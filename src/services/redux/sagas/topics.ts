import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { Topic } from '../../../interfaces';
import { fetchTopics } from '../../api/topics';

import {
    fetchTopicsRequest,
    fetchTopicsSuccess,
    createTopicRequest,
    createTopicSuccess
} from '../slices/topics/topicsSlice';


export function* fetchTopicsSaga() {
    try {
        const topics: Topic[] = yield call(fetchTopics);

        yield put(fetchTopicsSuccess(topics));
    } catch {
        const error: Error = new Error(`Unsuccessful request. Try again.`);

        yield put({ type: 'topics/fetchTopicsFailure', error });
    }
}

export function* createTopicSaga({ payload: topic }: PayloadAction<Topic>) {
    try {
        yield put(createTopicSuccess(topic));
    } catch {
        const error: Error = new Error(`Unsuccessful request. Try again.`);

        yield put({ type: 'topics/createTopicsFailure', error });
    }
}

export default function* topicsSaga() {
    yield takeLatest(fetchTopicsRequest, fetchTopicsSaga);
    yield takeLatest(createTopicRequest, createTopicSaga);
}