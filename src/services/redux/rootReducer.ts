import { combineReducers } from '@reduxjs/toolkit';

import articlesReducer from './slices/articles/articlesSlice';
import currentArticleReducer from './slices/currentArticle/currentArticleSlice';
import topicsReducer from './slices/topics/topicsSlice';


const rootReducer = combineReducers({
    articles: articlesReducer,
    currentArticle: currentArticleReducer,
    topics: topicsReducer
});

export type AppState = ReturnType<typeof rootReducer>;


export default rootReducer;