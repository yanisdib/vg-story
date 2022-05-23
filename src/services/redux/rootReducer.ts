import { combineReducers } from '@reduxjs/toolkit';

import articlesReducer from './articles/articlesSlice';


const rootReducer = combineReducers({
    articles: articlesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;


export default rootReducer;