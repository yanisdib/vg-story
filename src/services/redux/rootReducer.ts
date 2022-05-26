import { combineReducers } from '@reduxjs/toolkit';

import articlesReducer from './articles/articlesSlice';
import currentArticleReducer from './currentArticle/currentArticleSlice';


const rootReducer = combineReducers({
    articles: articlesReducer,
    currentArticle: currentArticleReducer,
});

export type AppState = ReturnType<typeof rootReducer>;


export default rootReducer;