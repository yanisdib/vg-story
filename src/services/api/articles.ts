import axios, { AxiosResponse } from 'axios';

import { Article } from '../../interfaces';


const ROOT_API_URL = process.env.REACT_APP_API_URL;

export const fetchArticles = async (): Promise<Article[]> => {
    const url: string = `${ROOT_API_URL}/articles`;

    try {
        const response: AxiosResponse<Article[]> = await axios.get(url);

        return response.data;
    } catch (error) {
        throw error;
    }
}

/**
 * Fetch Articles and retrieve the article
 * matching the permalink passed in
 */
export const fetchArticleByPermalink = async (
    permalink: string
): Promise<Article | object> => {
    try {
        const results: Article[] = await fetchArticles();
        const article: Article | undefined = results.find(
            (article: Article) => article.permalink === permalink
        );

        return article ?? {};
    } catch (error) {
        throw error;
    }
}

export const addArticleToApi = async (
    article: Article
): Promise<void> => {

    const url: string = `${ROOT_API_URL}/articles`;

    const results = await axios.post(url, article);
    console.log(results.data);
}