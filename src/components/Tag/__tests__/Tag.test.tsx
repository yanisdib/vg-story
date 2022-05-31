import { render } from '@testing-library/react'

import Tag from '../Tag';


describe('Tag component', () => {
    it('renders correctly without crashing', () => {

        const { container } = render(<Tag selected={false}>Hello</Tag>);

        expect(container).toMatchSnapshot();
    })

    it('has a children text', () => {
        
        const { getByText } = render(<Tag selected={false}>Hello</Tag>);

        expect(getByText('Hello')).toBeInTheDocument;
    })
})