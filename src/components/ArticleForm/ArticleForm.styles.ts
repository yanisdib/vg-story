import styled from 'styled-components';


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    width: 80%;
    margin: 50px 0;
`;

export const FormController = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    row-gap: 10px;
    align-items: center;
    width: 100%;
`;

export const FormLabel = styled.label`
    width: 100%;
`;

export const TextInput = styled.input`
    width: 100%;
`;

export const ContentTextArea = styled.textarea`
    min-width: 100%;
    display: flex;
    flex-direction: column;
    height: 60vh;
`;

export const FeaturedArticleCheckbox = styled.input`
    width: 15px;
    height: 15px;
`;

export const SubmitButton = styled.input``;