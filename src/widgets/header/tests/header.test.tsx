import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from '@src/entities/cart';
import { Header } from '@src/widgets/header';
import { ThemeProvider } from '@src/shared/context/theme-context.tsx';
import { BrowserRouter } from 'react-router-dom';

const renderHeader = (cartCount = 0) => {
  const store = configureStore({
    reducer: { cart: cartReducer, auth: () => ({ isAuthorized: false }) },
    preloadedState: { cart: { meals: {}, count: cartCount }, auth: { isAuthorized: false } },
  });
  render(
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
  );
};

describe('Header', () => {
  it('renders cart count', () => {
    renderHeader(5);
    expect(screen.getByTestId('cart-count') || screen.getByText(/5/)).toBeInTheDocument();
  });

  it('renders all visible tabs', () => {
    renderHeader();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Menu/i)).toBeInTheDocument();
  });
});
