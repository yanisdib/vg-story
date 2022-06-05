import {
    ActionReducerMapBuilder,
    AnyAction,
    PayloadAction,
    createSlice
} from '@reduxjs/toolkit';

import {
    FailedAction,
    StoreState,
    Topic
} from '../../../../interfaces';


interface TopicsState extends StoreState<Topic[]> { }


const initialState: TopicsState = {
    body: [],
    error: null,
    status: 'idle'
};

// Manage failed actions
export const isFailedAction = (
    action: AnyAction
): action is FailedAction => action.type.endsWith('Failure');


const reducers = {
    fetchTopicsRequest: (state: TopicsState) => ({
        ...state,
        status: 'pending'
    }),
    fetchTopicsSuccess: (
        state: TopicsState,
        action: PayloadAction<Topic[]>
    ) => ({
        ...state,
        body: action.payload,
        status: 'resolved'
    }),
    createTopicRequest: (
        state: TopicsState,
        action: PayloadAction<Topic>
    ) => ({
        ...state,
        status: 'pending'
    }),
    createTopicSuccess: (
        state: TopicsState,
        action: PayloadAction<Topic>
    ) => ({
        ...state,
        body: [...state.body, action.payload],
        status: 'resolved'
    })
};


const extraReducers = (
    builder: ActionReducerMapBuilder<TopicsState>
) => {
    builder
        .addMatcher(isFailedAction,
            (state, action) => {
                return {
                    body: state.body,
                    error: action.error,
                    status: 'rejected'
                };
            })
        .addDefaultCase((state: TopicsState) => state)
};


export const topicsSlice = createSlice({
    name: 'topics',
    initialState,
    reducers,
    extraReducers
});

export const {
    fetchTopicsRequest,
    fetchTopicsSuccess,
    createTopicRequest,
    createTopicSuccess
} = topicsSlice.actions;


export default topicsSlice.reducer;