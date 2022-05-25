import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../../services/redux/store';

import Home from '../Home';


describe('Home component', () => {
    
    const { container } = render(
        <Provider store={store}>
            <Home />
        </Provider>
    );

    it('renders without crashing', () => {
        expect(container).toMatchSnapshot();
    });
});