import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../services/redux/hooks';

import { fetchTopicsRequest } from '../services/redux/slices/topics/topicsSlice';


export const useTopics = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopicsRequest());
    }, []);

    const { body: topics, error, status } = useAppSelector(state => state.topics);

    return { topics, error, status };
}