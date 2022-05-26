import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import { Article } from '../../../interfaces';

import Hero from '../Hero';


describe('Hero component', () => {

    const article: Article = {
        author: 'Yanis',
        backgroundHex: '#FF5B5B',
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
            <Hero article={article} />,
            { wrapper: MemoryRouter }
        );

        expect(container).toMatchSnapshot();
    });

    it('should render title of article', () => {

        const { getByText } = render(
            <Hero article={article} />,
            { wrapper: MemoryRouter }
        );

        expect(getByText('This is a test')).toBeInTheDocument();
    });

    it('should have background color of the article', () => {

        const { getByTestId } = render(
            <Hero article={article} />,
            { wrapper: MemoryRouter }
        );

        expect(getByTestId('hero-section'))
            .toHaveStyle(`background-color: ${article.backgroundHex}`);
    });

    it('should have a black background by default', () => {
        const testArticle: Article = {
            author: 'Yanis',
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

        const { getByTestId } = render(
            <Hero article={testArticle} />,
            { wrapper: MemoryRouter }
        );

        expect(getByTestId('hero-section')).toHaveStyle(`background-color: #000`)
    });
});