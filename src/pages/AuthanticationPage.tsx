import { useAppDispatch, useAppSelector } from "../store/index";
import classes from "./Auth.module.css";
import { AuthActions, AuthState } from "../store/slices/authanticationSlice";
import { ImHappy2 } from "react-icons/im";

const AuthanticationPage = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector<AuthState>((state) => state.auth);
  const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(AuthActions.login());
  };
  return (
    <main className={classes.auth} data-testid="auth">
      <section>
        {!isAuth && !localStorage.getItem("logged") ? (
          <form onSubmit={loginHandler}>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" aria-label="email" required id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                aria-label="password"
              />
            </div>
            <button>Login</button>
          </form>
        ) : (
          <div className={classes.loggedIn}>
            <ImHappy2 />
            <p>Logged In</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default AuthanticationPage;
