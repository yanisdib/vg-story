import styled from 'styled-components'


export const Section = styled.section`
    --ui-grid-mg-y: 100px;
    --card-image-mg-y: 20px;

    display: flex;
    flex-direction: row;
    height: auto;
    margin: var(--ui-grid-mg-y) 0;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

export const Grid = styled.div`
    display: grid;
    grid-template: auto;
    row-gap: var(--ui-grid-mg-y);
    column-gap: var(--ui-grid-mg-y);
    justify-items: center;
    width: 100%;
    height: 100%;

    h3, h5 {
        margin: 8px 0;
    }

    p {
        margin: 15px 0;
        line-height: 28px;
        font-size: 1.2em;
        font-weight: 200;
        color: var(--ui-shark-color);
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: fit-content;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        margin-bottom: var(--card-image-mg-y);
    }
`;

export const FullCard = styled.div`
    display: flex;
    flex-direction: row;
    grid-column: span 2;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: fit-content;

    div {
        width: 100%;
        height: 100%;
        flex-basis: 54.5%;

        &:first-child {
            flex-basis: 37.5%;
            margin-right: 8%;
        }
    }

    img {
        width: 100%;
        height: 100%;
        flex-basis: 54.5%;
        object-fit: cover;
        object-position: center;
    }
`;

export const Column = styled.div``;

export const ViewMore = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: var(--ui-grid-mg-y);

    h3 {
        font-family: var(--ui-subtitle-font);
        font-weight: 500;
    }
`;