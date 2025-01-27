import './i18n';
import { App } from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
