import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppSelector } from '../services/redux/hooks';
import { fetchCurrentArticleRequest } from '../services/redux/slices/currentArticle/currentArticleSlice';


export function useCurrentArticle() {
    const dispatch = useDispatch();

    const { permalink = '' } = useParams();

    useEffect(() => {
        dispatch(fetchCurrentArticleRequest(permalink));
    }, [permalink]);

    const {
        body,
        error,
        status
    } = useAppSelector(state => state.currentArticle);

    return { currentArticle: body, error, status };
}