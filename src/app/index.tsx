import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '@src/app/app.tsx';
import { Provider } from 'react-redux';
import { store } from '@src/app/providers/store/config.ts';
import { ThemeProvider } from '@src/shared/context/theme-context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
