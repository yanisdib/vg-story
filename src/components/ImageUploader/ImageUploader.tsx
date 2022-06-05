import { ImageAttributes } from '../../interfaces';

import {
    AddImageIcon,
    FileInput,
    PreviewCanvas,
    Uploader
} from './ImageUploader.styles';


interface ImageUploaderProps {
    image?: ImageAttributes;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


function ImageUploader({ image, onChange }: ImageUploaderProps)
    : JSX.Element {

    return (
        <>
            {image && (
                <PreviewCanvas
                    alt={image.alt}
                    data-testid="preview-canvas"
                    src={image.src}
                    title={image.title}
                />
            )}
            <Uploader htmlFor="image-uploader">
                <AddImageIcon />
                Choose an image for your story
                <small>
                    You can only upload images of .jpg, .jpeg and.png formats
                </small>
                <FileInput
                    type="file"
                    id="image-uploader"
                    onChange={onChange}
                    accept=".jpg, .jpeg, .png"
                />
            </Uploader>
        </>
    );
}


export default ImageUploader;