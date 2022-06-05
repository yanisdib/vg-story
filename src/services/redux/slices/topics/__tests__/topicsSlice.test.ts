import reducer, {
    fetchTopicsRequest,
    fetchTopicsSuccess,
    isFailedAction
} from '../topicsSlice';

import { StoreState, Topic } from '../../../../../interfaces';


const topics: Topic[] = [
    {
        createdAt: 12000,
        id: "32rj",
        name: "article",
        permalink: 'articles'
    },
    {
        createdAt: 15000,
        id: "5e4j",
        name: "review",
        permalink: 'reviews'
    }
];


describe('topicsSlice reducer', () => {
    const initialState: StoreState<[]> = {
        body: [],
        error: null,
        status: 'idle'
    };

    it('returns the initial state', () => {
        expect(reducer(
            undefined,
            { type: '' }
        ))
            .toEqual(initialState);
    });

    it('handles a request to fetch topics from API', () => {
        expect(reducer(
            initialState,
            fetchTopicsRequest()
        ))
            .toEqual({
                ...initialState,
                status: 'pending'
            });
    });

    it('handles topics being fetched from API', () => {
        expect(reducer(
            initialState,
            fetchTopicsSuccess(topics)
        ))
            .toEqual({
                body: topics,
                error: null,
                status: 'resolved'
            });
    });

    it('handles failed request from API', () => {
        const error: Error = new Error('Unsuccessful Request. Try again.');

        const previousState: StoreState<[]> = {
            body: [],
            error: null,
            status: 'idle'
        };

        expect(reducer(previousState, {
            type: 'topics/fetchTopicsFailure',
            error
        })).toEqual({
            ...previousState,
            error,
            status: 'rejected'
        });
    });
});

//TODO: TEST ACTIONS

describe('topicsSlice actions', () => {
    it('should trigger request to API', () => {
        const action = fetchTopicsRequest();

        expect(action).toEqual({ type: 'topics/fetchTopicsRequest' });
    });

    it('should generate topics list', () => {
        const action = fetchTopicsSuccess(topics);

        expect(action).toEqual({
            type: 'topics/fetchTopicsSuccess',
            payload: topics
        });
    });
});