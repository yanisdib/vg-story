import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';

import { useCurrentArticle } from './hooks/useCurrentArticle';
import withStatusHandler from './helpers/hoc/withStatusHandler';

import { Article, Footer } from './components';
import { Dashboard, Home } from './pages';


function App(): JSX.Element {

  const ArticleWrapper = () => {

    const { currentArticle, error, status } = useCurrentArticle();
    const ArticleWithStatusHandler = withStatusHandler(Article);

    return (
      <ArticleWithStatusHandler
        error={error}
        status={status}
        {...{ currentArticle }}
      />
    );
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article/*">
          <Route index element={<Navigate to="/" replace />} />
          <Route path=":permalink" element={<ArticleWrapper />} />
        </Route>
        <Route path='dashboard/*'>
          <Route index element={<Dashboard />} />
          <Route path='create-article' element={<div>Create an article</div>} />
        </Route>

      </Routes>
      <Footer />
    </main>
  );
}


export default App;