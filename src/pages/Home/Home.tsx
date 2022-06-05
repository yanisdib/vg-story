import { Article } from '../../interfaces';

import { useArticles } from '../../hooks/useArticles';

import { selectFeaturedArticles, selectLatestFeaturedArticles } from '../../services/redux/selectors/articles';

import withStatusHandler from '../../helpers/hoc/withStatusHandler';

import { FeaturedArticlesGrid, Hero } from '../../components';


function Home(): JSX.Element {
    const { articles, error, status } = useArticles();

    const featuredArticles = selectLatestFeaturedArticles({
        body: articles,
        error,
        status
    });

    const HeroWithStatusHandler = withStatusHandler<{ article: Article }>(Hero);
    const FeaturedArticlesGridWithStatusHandler = withStatusHandler<{ featuredArticles: Article[] }>(FeaturedArticlesGrid)


    return (
        <>
            <HeroWithStatusHandler
                error={error}
                status={status}
                {...{ article: featuredArticles[0] }}
            />
            <FeaturedArticlesGridWithStatusHandler
                error={error}
                status={status}
                {...{
                    featuredArticles: featuredArticles.slice(1)
                }}
            />
        </>
    );
}


export default Home;