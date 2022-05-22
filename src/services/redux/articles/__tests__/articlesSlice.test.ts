import reducer, {
    createArticleRequest,
    createArticleSuccess,
    fetchArticlesRequest,
    fetchArticlesSuccess
} from '../articlesSlice';

import { Article, StoreState } from '../../../../interfaces';


const articles: Article[] = [
    {
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
    },
    {
        author: 'Yanis',
        backgroundHex: '#000',
        frontImage: { src: 'hello.jpg' },
        createdAt: 1000,
        id: '12de',
        permalink: 'this-is-another-test',
        title: 'This is another test',
        topics: [
            {
                createdAt: 0,
                id: '2be',
                name: 'React',
                permalink: 'react'
            }
        ]
    }
];


describe('ArticlesSlice reducer', () => {
    const initialState: StoreState<Article[]> = {
        body: [],
        error: null,
        status: 'idle'
    };

    it('returns the initial state', () => {
        expect(reducer(undefined, { type: '' })).toEqual(initialState);
    });

    it('handles a request to fetch data from API', () => {
        expect(reducer(initialState, fetchArticlesRequest()))
            .toEqual({
                ...initialState,
                status: 'pending'
            });
    });

    it('handles articles being fetched from API', () => {
        expect(reducer(initialState, fetchArticlesSuccess(articles)))
            .toEqual({
                body: articles,
                error: null,
                status: 'resolved'
            });
    });

    it('handles failed request from API', () => {
        const error: Error = new Error('Unsuccessful Request. Try again.');

        const previousState: StoreState<Article[]> = {
            body: [],
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

    it('handles an article being added to an empty array', () => {
        const previousState: StoreState<Article[]> = {
            body: [],
            error: null,
            status: 'idle'
        };

        expect(reducer(previousState, createArticleSuccess(articles[0])))
            .toEqual({
                body: [...previousState.body, articles[0]],
                error: null,
                status: 'resolved'
            });
    });

    it('handles an article being added to an existing array', () => {
        const previousState: StoreState<Article[]> = {
            body: [
                {
                    author: 'Charlemagne',
                    backgroundHex: '#000',
                    frontImage: { src: 'charlemagne.jpg' },
                    createdAt: 12777350,
                    id: '54gh',
                    permalink: 'this-is-a-redux-test',
                    title: 'This is a Redux test',
                    topics: [
                        {
                            createdAt: 0,
                            id: '4gs',
                            name: 'Foo',
                            permalink: 'foo'
                        }
                    ]
                }
            ],
            error: null,
            status: 'resolved'
        };

        expect(reducer(previousState, createArticleSuccess(articles[1])))
            .toEqual({
                body: [...previousState.body, articles[1]],
                error: null,
                status: 'resolved'
            });
    });

    it('handles an article failing to be added to an empty array', () => {
        const error: Error = new Error('Unsuccessful Request. Try again.');

        const previousState: StoreState<Article[]> = {
            body: [],
            error: null,
            status: 'idle'
        };

        expect(reducer(previousState, {
            type: 'articles/createArticleFailure',
            error
        })).toEqual({
            ...previousState,
            error,
            status: 'rejected'
        });
    });
})

//TODO: TEST ACTIONS

describe('ArticlesSlice actions', () => {
    const article: Article = articles[0];

    it('should set up article object', () => {
        const action = createArticleRequest(article);

        expect(action).toEqual({
            type: 'articles/createArticleRequest',
            payload: article
        });
    });

    it('should generate article object', () => {
        const action = createArticleSuccess(article);

        expect(action).toEqual({
            type: 'articles/createArticleSuccess',
            payload: article
        });
    });

    it('should trigger request to API', () => {
        const action = fetchArticlesRequest();

        expect(action).toEqual({ type: 'articles/fetchArticlesRequest' });
    });

    it('should generate articles array of Article', () => {
        const action = fetchArticlesSuccess(articles);

        expect(action).toEqual({
            type: 'articles/fetchArticlesSuccess',
            payload: articles
        });
    });
})