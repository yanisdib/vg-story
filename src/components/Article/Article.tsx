import React from 'react';
import { Link } from 'react-router-dom';

import { Article } from '../../interfaces';

import Container from '../Container/Container';
import {
    Content,
    Details,
    FrontImage,
    Main,
    View,
    Wrapper
} from './Article.styles';


interface ArticleProps {
    currentArticle: Article;
}


function Article({ currentArticle }: ArticleProps) {

    const {
        author,
        backgroundHex = '#000',
        body,
        comments,
        createdAt,
        frontImage,
        imageGallery,
        title,
        topics
    }: Article = currentArticle;

    return (
        <View background={backgroundHex}>
            <Wrapper>
                <Container>
                    <Content>
                        <Details>
                            <h5>
                                {topics
                                    .map<React.ReactNode>(topic => (
                                        <Link to={`/browse/${topic.permalink}`}>
                                            {topic.name}
                                        </Link>
                                    ))
                                    .reduce((previous, current) => [
                                        previous,
                                        ' — ',
                                        current
                                    ])
                                }
                            </h5>
                            <h2>{title}</h2>
                            <h5>
                                {`Written by ${author} — ${frontImage.title}`}
                            </h5>
                        </Details>
                        <FrontImage>
                            <img
                                alt={frontImage?.alt ?? title}
                                src={frontImage.src}
                                title={frontImage?.title ?? title}
                            />
                        </FrontImage>
                        <Main></Main>
                    </Content>
                </Container>
            </Wrapper>
        </View>
    );
}


export default Article;