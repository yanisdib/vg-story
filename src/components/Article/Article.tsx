import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

import { Article as IArticle } from '../../interfaces';

import Container from '../Container/Container';

import {
    Body,
    Content,
    Details,
    FrontImage,
    Information,
    Main,
    View,
    Wrapper
} from './Article.styles';


interface ArticleProps {
    currentArticle: IArticle;
}


function Article({ currentArticle }: ArticleProps): JSX.Element {

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
    }: IArticle = currentArticle;

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
                        <Main>
                            <Information>
                                <span>Published:</span>
                                <p>{moment(createdAt).format('ll')}</p>

                                <span>Written by:</span>
                                <p>{author}</p>

                                <span>Artwork by:</span>
                                <p>Square Enix</p>
                            </Information>
                            <Body>
                                <p>{body}</p>
                            </Body>
                        </Main>
                    </Content>
                </Container>
            </Wrapper>
        </View>
    );
}


export default Article;