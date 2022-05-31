import styled from 'styled-components';

import { ImageAdd } from '@styled-icons/remix-line';


export const PreviewCanvas = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
    margin: auto;

`;

export const Uploader = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 20px;
    align-items: center;
    width: 100%;
    min-height: 35vh;
    padding: 20px;
    font-size: 16px;
    color: var(--form-input-placeholder-color);
    border: var(--form-input-border);
    border-radius: var(--form-input-border-radius);
    cursor: pointer;
`;

export const FileInput = styled.input`
    display: none;
`;

export const AddImageIcon = styled(ImageAdd)`
    height: 50px;
    color: var(--form-input-border-color);
`;