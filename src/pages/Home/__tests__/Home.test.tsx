import { render } from '@testing-library/react';

import Home from '../Home'


describe('Home component', () => {
    it('renders without crashing', () => {
        const { container } = render(<Home />);
        
        expect(container).toMatchSnapshot();
    });
});