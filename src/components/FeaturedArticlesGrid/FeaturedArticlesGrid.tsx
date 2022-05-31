import { Link } from 'react-router-dom';

import { Article } from '../../interfaces';

import { Container } from '../';

import {
    Card,
    Column,
    Content,
    FullCard,
    Grid,
    Section,
    ViewMore,
    Wrapper
} from './FeaturedArticlesGrid.styles';


interface FeaturedArticlesGridProps {
    featuredArticles: Article[];
}


function FeaturedArticlesGrid(
    { featuredArticles }: FeaturedArticlesGridProps
): JSX.Element {
    return (
        <Section>
            <Wrapper>
                <Container>
                    <Content>
                        <Grid>
                            {featuredArticles
                                .flatMap((article, index) => {

                                    const {
                                        body,
                                        frontImage,
                                        id,
                                        permalink,
                                        title,
                                        topics
                                    } = article;

                                    return (index < featuredArticles.length - 1) ? (
                                        <Card key={id} data-testid={`card-test-${index}`}>
                                            <Link to={`article/${permalink}`}>
                                                <img
                                                    alt={frontImage?.alt ?? title}
                                                    src={frontImage.src}
                                                    title={frontImage?.title ?? title}
                                                />
                                            </Link>
                                            <h5>
                                                {topics
                                                    .map(topic => topic.name)
                                                    .join(' — ')}
                                            </h5>
                                            <Link to={`article/${permalink}`}>
                                                <h3>{title}</h3>
                                            </Link>
                                            <p>{body}</p>
                                        </Card>
                                    ) : (
                                        <FullCard key={id} data-testid="fullcard-test">
                                            <Column>
                                                <h5>
                                                    {topics
                                                        .map(topic => topic.name)
                                                        .join(' — ')}
                                                </h5>
                                                <Link to={`article/${permalink}`}>
                                                    <h3>{title}</h3>
                                                </Link>
                                                <p>{body}</p>
                                            </Column>
                                            <Column>
                                                <Link to={`article/${permalink}`}>
                                                    <img
                                                        alt={frontImage?.alt ?? title}
                                                        src={frontImage.src}
                                                        title={frontImage?.title ?? title}
                                                    />
                                                </Link>
                                            </Column>
                                        </FullCard>
                                    );
                                })}
                        </Grid>
                    </Content>
                </Container>
                <ViewMore>
                    <Link to="/browse/articles">
                        <h3>View all stories -&gt;</h3>
                    </Link>
                </ViewMore>
            </Wrapper>
        </Section>
    );
}


export default FeaturedArticlesGrid;