import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Article } from '../../../interfaces';

import FeaturedArticlesGrid from '../FeaturedArticlesGrid';


describe('FeaturedArticlesGrid component', () => {

    const featuredArticles: Article[] = [
        {
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
        },
        {
            author: 'Jean',
            backgroundHex: '#8C5BFF',
            frontImage: { src: 'hello.jpg' },
            createdAt: 1000,
            id: '12fe',
            permalink: 'this-is-a-second-test',
            title: 'This is a second test',
            topics: [
                {
                    createdAt: 0,
                    id: '1ac',
                    name: 'Test',
                    permalink: 'test'
                }
            ]
        },
        {
            author: 'Pierre',
            backgroundHex: '#2848FF',
            frontImage: { src: 'hello.jpg' },
            createdAt: 1000,
            id: '1he',
            permalink: 'this-is-a-third-test',
            title: 'This is a third test',
            topics: [
                {
                    createdAt: 0,
                    id: '1ac',
                    name: 'Test',
                    permalink: 'test'
                }
            ]
        }
    ];

    it('should render without crashing', () => {

        const { container } = render(
            <FeaturedArticlesGrid featuredArticles={featuredArticles} />,
            { wrapper: MemoryRouter }
        );

        expect(container).toMatchSnapshot();
    });

    it('should render two Card components with the two latest featured articles', () => {

        const { getByTestId } = render(
            <FeaturedArticlesGrid featuredArticles={featuredArticles} />,
            { wrapper: MemoryRouter }
        );

        featuredArticles.forEach((article, index) => {
            (index < featuredArticles.length - 2) && (
                expect(getByTestId(`card-test-${index}`))
                    .toBeInTheDocument()
            );
        });
    });

    it('should render a FullCard component if there is more than 3 featured articles', () => {

        const { getByTestId } = render(
            <FeaturedArticlesGrid featuredArticles={featuredArticles} />,
            { wrapper: MemoryRouter }
        );

        expect(getByTestId('fullcard-test')).toBeInTheDocument();
        expect(getByTestId('fullcard-test')).toHaveStyle('grid-column: span 2');
    });
});