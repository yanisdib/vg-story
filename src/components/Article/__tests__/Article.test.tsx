import { render } from '@testing-library/react';
import moment from 'moment';
import { MemoryRouter } from 'react-router-dom';

import { Article as IArticle } from '../../../interfaces';

import Article from '../Article';


describe('Article component', () => {
    const currentArticle: IArticle = {
        author: 'Yanis',
        backgroundHex: '#FF5B5B',
        body: 'lorem ipsum',
        frontImage: { src: 'hello.jpg' },
        createdAt: 1000,
        id: '12de',
        permalink: 'this-is-a-test',
        title: 'This is a test',
        topics: [
            {
                createdAt: 0,
                id: '1ac',
                name: 'Test',
                permalink: 'test'
            }
        ]
    };

    it('should render without crashing', () => {
        const { container } = render(
            <Article currentArticle={currentArticle} />,
            { wrapper: MemoryRouter }
        );

        expect(container).toMatchSnapshot();
    });

    it('should render the content of the article', () => {
        const { getByText } = render(
            <Article currentArticle={currentArticle} />,
            { wrapper: MemoryRouter }
        );

        const date: string = moment(currentArticle.createdAt).format('ll');

        expect(getByText('Yanis')).toBeInTheDocument();
        expect(getByText(date)).toBeInTheDocument();
        expect(getByText('Square Enix')).toBeInTheDocument();
        expect(getByText('lorem ipsum')).toBeInTheDocument();
    });
});