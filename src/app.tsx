import React, { useEffect } from 'react';
import './app.css';
import { Theme } from 'ui/theme';
import { HomePage, RegistrationPage } from 'ui/components/pages';
import { QueryClient, QueryClientProvider } from 'react-query';
import './i18n';
import { Routes, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { CommunicationWithApiStartup } from './infrastructure/communication-with-api';
import { AuthenticationStartup } from './infrastructure/authentication';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    CommunicationWithApiStartup.init();
    AuthenticationStartup.init();
  }, []);

  return (
    <Theme>
      <QueryClientProvider client={queryClient}>
        <HashRouter basename={process.env.REACT_APP_BASENAME}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rejestracja" element={<RegistrationPage />} />
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </Theme>
  );
};

export { App };
