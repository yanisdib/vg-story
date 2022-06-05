import reducer, {
    fetchCurrentArticleRequest,
    fetchCurrentArticleSuccess
} from '../currentArticleSlice';

import { Article, StoreState } from '../../../../../interfaces';


const article: Article = {
    author: 'Yanis',
    backgroundHex: '#000',
    frontImage: { src: 'hello.jpg' },
    createdAt: 1000,
    id: '12de',
    permalink: 'this-is-a-test',
    title: 'This is a test',
    topics: [
        {
            createdAt: 0,
            id: '1ac',
            name: 'Test',
            permalink: 'test'
        }
    ]
};


describe('ArticlesSlice reducer', () => {
    const initialState: StoreState<{}> = {
        body: {},
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

    it('handles a request to fetch articles from API', () => {
        expect(reducer(
            initialState,
            fetchCurrentArticleRequest(article.permalink)
        ))
            .toEqual({
                ...initialState,
                status: 'pending'
            });
    });

    it('handles selected article being fetched from API', () => {
        expect(reducer(
            initialState,
            fetchCurrentArticleSuccess(article)
        ))
            .toEqual({
                body: article,
                error: null,
                status: 'resolved'
            });
    });

    it('handles failed request from API', () => {
        const error: Error = new Error('Unsuccessful Request. Try again.');

        const previousState: StoreState<{}> = {
            body: {},
            error: null,
            status: 'idle'
        };

        expect(reducer(previousState, {
            type: 'articles/fetchArticlesFailure',
            error
        })).toEqual({
            ...previousState,
            error,
            status: 'rejected'
        });
    });
});

//TODO: TEST ACTIONS

describe('currentArticleSlice actions', () => {
    it('should trigger request to API', () => {
        const action = fetchCurrentArticleRequest(article.permalink);

        expect(action).toEqual({
            type: 'currentArticle/fetchCurrentArticleRequest',
            payload: 'this-is-a-test'
        });
    });

    it('should generate article object', () => {
        const action = fetchCurrentArticleSuccess(article);

        expect(action).toEqual({
            type: 'currentArticle/fetchCurrentArticleSuccess',
            payload: article
        });
    });
});