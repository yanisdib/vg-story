import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Dashboard from '../Dashboard';


describe('Dashboard page', () => {
    it('should render without crashing', () => {

        const { container } = render(<Dashboard />, { wrapper: MemoryRouter });

        expect(container).toMatchSnapshot();
    });
});