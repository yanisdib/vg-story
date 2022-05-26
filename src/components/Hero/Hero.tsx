import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Article } from '../../interfaces';


interface HeroProps {
    article: Article;
}

interface StyledSectionProps {
    readonly background?: string;
}


const Section = styled.section<StyledSectionProps>`
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

const Wrapper = styled.div`
    flex-direction: column;
    width: 100%;
    height: inherit;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
`;

const Preview = styled.div`
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

const FrontImage = styled.div`
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


function Hero({ article }: HeroProps) {
    const {
        backgroundHex = '#000',
        frontImage,
        permalink,
        title,
        topics
    } = article;

    return (
        <Section
            data-testid="hero-section"
            background={backgroundHex}
        >
            <Wrapper>
                <Content>
                    <Preview>
                        <h4>
                            {topics
                                .map(topic => topic?.name)
                                .join(' — ')}
                        </h4>
                        <h1>
                            <Link to={`article/${permalink}`}>
                                {title}
                            </Link>
                        </h1>
                        <h4>
                            <span>
                                <Link to={`article/${permalink}`}>
                                    Read -&gt;
                                </Link>
                            </span>
                        </h4>
                    </Preview>
                    <FrontImage>
                        <Link to={`article/${permalink}`} title="Read">
                            <img
                                alt={`${frontImage?.alt ?? `Article's image`}`}
                                src={frontImage?.src}
                                title={`${frontImage?.title ?? `Article's image`}`}
                            />
                        </Link>
                    </FrontImage>
                </Content>
            </Wrapper>
        </Section>
    );
}


export default Hero;