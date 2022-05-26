import { Link } from 'react-router-dom';

import { Article } from '../../interfaces';

import {
    Content,
    FrontImage,
    Preview,
    Section,
    Wrapper
} from './Hero.styles';


interface HeroProps {
    readonly article: Article;
}


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
                                .map(topic => topic.name)
                                .join(' — ')
                            }
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