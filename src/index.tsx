import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';

import store from './services/redux/store';

import GlobalTheme from './assets/styles/global';
import { defaultTheme } from './assets/styles/theme';

import App from './App';


interface AppWrapperProps {
  children: JSX.Element;
}


const AppWrapper = ({ children }: AppWrapperProps) => {

  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
}


const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalTheme />
      <StoreProvider store={store}>
        <BrowserRouter>
          <AppWrapper>
            <App />
          </AppWrapper>
        </BrowserRouter>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);


