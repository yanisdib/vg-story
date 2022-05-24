import { Hero } from '../../components';

import { Article } from '../../interfaces';

import { useArticles } from '../../hooks/useArticles';
import { selectFeaturedArticles } from '../../services/redux/selectors/articles';

import withStatusHandler from '../../helpers/hoc/withStatusHandler';


function Home(): JSX.Element {
    const { articles, error, status } = useArticles();

    const featuredArticles = selectFeaturedArticles({
        body: articles,
        error,
        status
    });

    const HeroWithStatusHandler = withStatusHandler<{ article: Article }>(Hero);

    return (
        <HeroWithStatusHandler
            error={error}
            status={status}
            {...{ article: featuredArticles[0] }}
        />
    );
}


export default Home;