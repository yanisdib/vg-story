import { useDispatch } from 'react-redux';

import { createArticleRequest } from '../../services/redux/slices/articles/articlesSlice';

import { Article } from '../../interfaces';

import { View, Content, Wrapper } from './CreateArticle.styles';
import Container from '../Container/Container';
import ArticleForm from '../ArticleForm/ArticleForm';
import { addArticleToApi } from '../../services/api/articles';


function CreateArticle(): JSX.Element {

    const dispatch = useDispatch();

    const handleFormSubmit = async (article: Article) => {
        await addArticleToApi(article);
        dispatch(createArticleRequest(article));
    }

    return (
        <View>
            <Wrapper>
                <Container>
                    <Content>
                        <ArticleForm onSubmit={handleFormSubmit} />
                    </Content>
                </Container>
            </Wrapper>
        </View>
    );
}


export default CreateArticle;