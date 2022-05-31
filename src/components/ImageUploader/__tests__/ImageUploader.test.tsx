import { render } from '@testing-library/react';

import ImageUploader from '../ImageUploader';


describe('ImageUploader component', () => {

    const onImageChange = jest.fn();
    const currentImage = { src: 'hello.jpg' };

    it('should render without crashing', () => {

        const { container } = render(<ImageUploader image={currentImage} onChange={onImageChange} />);

        expect(container).toMatchSnapshot();
    });

    it('should render no image if currentImage is empty', () => {

        const { queryAllByTestId } = render(<ImageUploader onChange={onImageChange} />);

        expect(queryAllByTestId('preview-canvas')).toHaveLength(0);
    });

    it('should render the current image inside preview canvas', () => {

        const { getByTestId } = render(<ImageUploader image={currentImage} onChange={onImageChange} />);

        expect(getByTestId('preview-canvas')).toBeInTheDocument();
        expect(getByTestId('preview-canvas')).toHaveAttribute('src', 'hello.jpg');
    });
});