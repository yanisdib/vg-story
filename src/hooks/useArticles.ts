import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchArticlesRequest } from '../services/redux/articles/articlesSlice';
import { useAppSelector } from '../services/redux/hooks';
import { selectArticles } from '../services/redux/selectors/articles';


/**
 * Hooks that fetches articles 
 * and returns populated state
 */
export const useArticles = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticlesRequest());
    }, []);

    const {
        body: articles,
        error,
        status
    } = useAppSelector(state => selectArticles(state));
 
    return { articles, error, status };
}