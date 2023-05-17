import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import NavBar from '../layout/NavBar';
import { AuthState } from '../store/slices/authanticationSlice';

const mockStore = configureStore([]);

describe('NavBar component', () => {
  let initialState: { auth: AuthState };
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    initialState = { auth: { isAuth: false } };
    store = mockStore(initialState);
  });

  it('renders Home and Login links when user is not authenticated', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const loginLink = screen.getByRole('link', { name: /login/i });

    expect(homeLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });

  it('renders Home and Logout links when user is authenticated', () => {
    initialState = { auth: { isAuth: true } };
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const logoutLink = screen.getByRole('link', { name: /logout/i });

    expect(homeLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });

});