import { createSelector } from '@reduxjs/toolkit';

import {
    Article,
    StoreState,
    Topic
} from '../../../interfaces';

import { RootState } from '../store';


export const selectArticles = (state: RootState) => state.articles;


export const selectFeaturedArticles = createSelector(
    (state: StoreState<Article[]>) => state.body,
    articles => articles.filter(
        article => article?.isFeatured
    )
);


export const selectLatestFeaturedArticles = createSelector(
    selectFeaturedArticles,
    featuredArticle => featuredArticle.sort(
        (a, b) => b?.createdAt - a?.createdAt
    ).slice(0, 4)
);


export const selectArticleById = createSelector([
    (state: StoreState<Article[]>) => state.body,
    (state: StoreState<Article[]>, id: string) => id
],
    (articles, id) => articles.find(
        article => article?.id === id
    ));


export const selectArticleByPermalink = createSelector([
    (state: StoreState<Article[]>) => state.body,
    (
        state: StoreState<Article[]>,
        permalink: string
    ) => permalink
],
    (articles, permalink): Article | string => {
        const selectedArticle = articles.find(
            article => article?.permalink === permalink
        );

        if (selectedArticle === undefined) {
            return 'This article does not exist.'
        }

        return selectedArticle;
    });


export const selectArticlesByCategories = createSelector([
    (state: StoreState<Article[]>) => state?.body,
    (
        state: StoreState<Article[]>,
        topics: Topic[]
    ) => topics
],
    (articles, topics) => articles.filter(
        article => topics.map(
            topic => article?.topics.includes(topic)
        )
    ));