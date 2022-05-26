import styled from 'styled-components';


interface StyledSectionProps {
    readonly background?: string;
}


export const Section = styled.section<StyledSectionProps>`
    background-color: ${({
        background
    }: StyledSectionProps) => background};

    @media (min-width: 375px) {
        display: flex;
        flex-direction: row;
        height: 100vh;

    }

    @media (min-width: 950px) {
        height: 95vh;
    }
`;

export const Wrapper = styled.div`
    flex-direction: column;
    width: 100%;
    height: inherit;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
`;

export const Preview = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    height: inherit;
    padding: 0 calc(var(--ui-padding-y) - 25px);
    
    a {
        color: #000;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    h1 {
        margin-bottom: 22px;
    }
    
    h4 {
        align-self: flex-start;
        margin: 10px 0;

        span > a {
            text-decoration: underline;

            &:hover{
                text-decoration: none;
            }
        }
    }
`;

export const FrontImage = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    justify-content: center;
    align-items: center;
    height: inherit;
    background-color: #FFF;

    a {
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
`;
