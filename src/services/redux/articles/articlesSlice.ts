import {
    ActionReducerMapBuilder,
    AnyAction,
    PayloadAction,
    createSlice
} from '@reduxjs/toolkit';

import {
    Article,
    FailedAction,
    StoreState
} from '../../../interfaces';


interface ArticleState extends StoreState<Article[]> { }


const initialState: ArticleState = {
    body: [],
    error: null,
    status: 'idle'
};

// Manage failed actions
const isFailedAction = (action: AnyAction): action is FailedAction => {
    return action.type.endsWith('Failure');
}


const reducers = {
    fetchArticlesRequest: (state: ArticleState) => ({
        ...state,
        status: 'pending'
    }),
    fetchArticlesSuccess: (
        state: ArticleState,
        action: PayloadAction<Article[]>
    ) => ({
        ...state,
        body: action.payload,
        status: 'resolved'
    }),
    createArticleRequest: (
        state: ArticleState,
        action: PayloadAction<Article>
    ) => ({
        ...state,
        status: 'pending'
    }),
    createArticleSuccess: (
        state: ArticleState,
        action: PayloadAction<Article>
    ) => ({
        ...state,
        body: [...state.body, action.payload],
        status: 'resolved'
    })
};


const extraReducers = (builder: ActionReducerMapBuilder<ArticleState>) => {
    builder
        .addMatcher(isFailedAction,
            (state, action) => {
                return {
                    body: state.body,
                    error: action.error,
                    status: 'rejected'
                };
            })
        .addDefaultCase((state: ArticleState) => state)
};


export const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers,
    extraReducers
});

export const {
    fetchArticlesRequest,
    fetchArticlesSuccess,
    createArticleRequest,
    createArticleSuccess
} = articlesSlice.actions;


export default articlesSlice.reducer;