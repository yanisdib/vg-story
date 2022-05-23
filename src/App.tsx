import { Route, Routes } from 'react-router-dom';

import { Footer } from './components';
import { Home } from './pages';


function App(): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </main>
  );
}


export default App;