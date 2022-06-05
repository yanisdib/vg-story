import axios, { AxiosResponse } from 'axios';

import { Topic } from '../../interfaces';


const ROOT_API_URL = process.env.REACT_APP_API_URL;


export async function fetchTopics(): Promise<Topic[]> {
    const url: string = `${ROOT_API_URL}/topics`;

    try {
        const response: AxiosResponse<Topic[]> = await axios.get(url);

        return response.data;
    } catch (error) {
        throw error;
    }
}