import { cleanup, render } from '@testing-library/react';

import withStatusHandler from '../withStatusHandler';


describe('withStatusHandler HOC', () => {
    afterEach(cleanup);

    function MockComponent(): JSX.Element {
        return <p>Hello there!</p>;
    }

    // Higher-Order Component Mock 
    const MockComponentWithStatusHandler = withStatusHandler(MockComponent);

    it('should render Loading component if status is pending or idle', () => {
        const { getByTestId } = render(
            <MockComponentWithStatusHandler status="pending" error={null} />
        );

        expect(getByTestId('loading-screen')).toBeInTheDocument();
    });

    it('should render an error message if status is rejected', () => {
        const error = new Error('Test worked but not your request');
        const { getByText } = render(
            <MockComponentWithStatusHandler status="rejected" error={error} />
        );

        expect(getByText('Test worked but not your request')).toBeInTheDocument();
    });

    it('should render wrapped component if status is resolved', () => {
        const { getByText } = render(
            <MockComponentWithStatusHandler status="resolved" error={null} />
        );

        expect(getByText('Hello there!')).toBeInTheDocument();
    });
});