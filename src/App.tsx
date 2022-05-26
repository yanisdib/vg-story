import {
  Navigate,
  Route,
  Routes
} from 'react-router-dom';

import { useCurrentArticle } from './hooks/useCurrentArticle';
import withStatusHandler from './helpers/hoc/withStatusHandler';

import { Article, Footer } from './components';
import { Home } from './pages';


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
      </Routes>
      <Footer />
    </main>
  );
}


export default App;