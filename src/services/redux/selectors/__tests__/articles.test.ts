import {
    Article,
    StoreState,
    Topic
} from '../../../../interfaces';

import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';

import {
    selectArticleByPermalink,
    selectArticles,
    selectFeaturedArticles
} from '../articles';


// Mock all functions in hooks module
jest.mock('../../hooks');

// Create an object of mocked useAppSelector hook's type
const mockedUseAppSelector = useAppSelector as jest.Mock;


describe('Articles selectors', () => {
    const mockedState: RootState = {
        articles: {
            body: [
                {
                    author: 'Yanis',
                    backgroundHex: '#000',
                    frontImage: { src: 'hello.jpg' },
                    createdAt: 1000,
                    id: '12de',
                    isFeatured: true,
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
            ],
            error: null,
            status: 'resolved'
        }
    };

    beforeEach(() => (
        mockedUseAppSelector
            .mockImplementation((
                selector: (
                    state: RootState
                ) => StoreState<Article | Article[]>
            ) => selector(mockedState))
    ));

    afterEach(() => jest.resetAllMocks());


    describe('selectArticles', () => {
        it('should return articles state', () => {
            const articles: StoreState<Article[]> = mockedUseAppSelector(selectArticles);

            expect(articles).toEqual(mockedState.articles);
        });
    });

    describe('selectFeaturedArticles', () => {
        it('should return a list of featured articles', () => {
            const articles: StoreState<Article[]> = mockedUseAppSelector(selectArticles);
            const featuredArticles = selectFeaturedArticles(articles);

            expect(featuredArticles).toEqual([mockedState.articles.body[0]]);
        });
    });

    describe('selectArticleByPermalink', () => {
        let articles: StoreState<Article[]>;

        beforeEach(() => (
            articles = mockedUseAppSelector(selectArticles)
        ));

        it('should retrieve and return an article by its permalink', () => {
            const permalink: string = 'this-is-a-test';
            const selectedArticle: Article | string = selectArticleByPermalink(
                articles,
                permalink
            );

            expect(selectedArticle).toEqual(mockedState.articles.body[0]);
        });

        it('should return message if article does not exist', () => {
            const permalink: string = 'abracadabra-is-not-working';
            const selectedArticle: Article | string = selectArticleByPermalink(
                articles,
                permalink
            );

            expect(selectedArticle).toEqual('This article does not exist.');
        });
    });
});