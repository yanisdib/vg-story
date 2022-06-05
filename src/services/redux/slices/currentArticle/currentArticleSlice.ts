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
} from '../../../../interfaces';


interface CurrentArticleState extends StoreState<Article | {}> { }


const initialState: CurrentArticleState = {
    body: {},
    error: null,
    status: 'idle'
};

// Manage failed actions
const isFailedAction = (
    action: AnyAction
): action is FailedAction => {
    return action.type.endsWith('Failure');
}


const reducers = {
    fetchCurrentArticleRequest: (
        state: CurrentArticleState,
        action: PayloadAction<string>
    ) => ({
        ...state,
        status: 'pending'
    }),
    fetchCurrentArticleSuccess: (
        state: CurrentArticleState,
        action: PayloadAction<Article>
    ) => ({
        ...state,
        body: action.payload,
        status: 'resolved'
    })
};


const extraReducers = (builder: ActionReducerMapBuilder<CurrentArticleState>) => {
    builder
        .addMatcher(isFailedAction,
            (state, action) => {
                return {
                    body: state.body,
                    error: action.error,
                    status: 'rejected'
                };
            })
        .addDefaultCase((
            state: CurrentArticleState
        ) => state)
};


export const currentArticleSlice = createSlice({
    name: 'currentArticle',
    initialState,
    reducers,
    extraReducers
});

export const {
    fetchCurrentArticleRequest,
    fetchCurrentArticleSuccess,
} = currentArticleSlice.actions;


export default currentArticleSlice.reducer;