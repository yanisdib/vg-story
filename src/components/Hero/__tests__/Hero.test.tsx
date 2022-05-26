import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

import { Article } from '../../../interfaces';

import Hero from '../Hero';


describe('Hero component', () => {

    const article: Article = {
        author: 'Yanis',
        backgroundHex: '#000',
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
});