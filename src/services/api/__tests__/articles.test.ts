import axios, { AxiosResponse } from 'axios';

import { Article } from '../../../interfaces';

import { fetchArticleByPermalink, fetchArticles } from '../articles';


const API_ARTICLES_ENDPOINT = `${process.env.REACT_APP_API_URL}/articles`;

// Mock axios module
jest.mock('axios');

// Create an object of mocked Axios' type
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Articles API', () => {
    beforeAll(() => jest.spyOn(axios, 'get')
        .mockImplementation());

    afterAll(() => jest.restoreAllMocks());

    // Desired output
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

    describe('fetchArticles()', () => {
        it('should return articles list', async () => {
            // Prepare the response we want to get from axios
            const mockedResponse: AxiosResponse<typeof articles> = {
                data: articles,
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
            };

            mockedAxios.get.mockResolvedValueOnce(mockedResponse);

            expect(axios.get).not.toHaveBeenCalled();

            const url = API_ARTICLES_ENDPOINT;
            const data: typeof articles = await fetchArticles();

            expect(axios.get).toHaveBeenCalledWith(url);
            expect(data).toEqual(articles);
        });
    })

    describe('fetchArticlesByPermalink()', () => {
        it('should find and return an article by its permalink if it exists', async () => {
            // Prepare the response we want to get from axios
            const mockedResponse: AxiosResponse<typeof articles> = {
                data: articles,
                status: 200,
                statusText: 'OK',
                headers: {},
                config: {},
            };

            mockedAxios.get.mockResolvedValueOnce(mockedResponse);

            expect(axios.get).not.toHaveBeenCalled();

            const data: Article | {} = await fetchArticleByPermalink('this-is-a-test');

            expect(data).toEqual(articles[0]);
        });
    });

});

