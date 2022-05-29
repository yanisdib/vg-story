import styled from 'styled-components';


interface StyledViewProps {
    background: string;
}


export const View = styled.div<StyledViewProps>`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    background: ${(
        { background = '#000' }: StyledViewProps
    ) => `linear-gradient(180deg, ${background} 70vh, #FFF 0%)`};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

export const Details = styled.div`
    padding: calc(var(--ui-padding-y) / 2) 0;
    line-height: var(--ui-title-lh-xl);

    a {
        color: #000;
        text-decoration: none #000;
            
        &:hover {
            text-decoration: underline #000;
        }
    }
`;

export const FrontImage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    max-height: 950px;

    img {
        display: flex;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: calc(var(--ui-padding-y) / 2) 0;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    flex: 30%;

    span {
        font-family: var(--ui-title-font);
        font-size: 1.1em;
        padding: calc(var(--ui-padding-y) / 10) 0;
        color: #a5a6ac;
    }
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 70%;
`;