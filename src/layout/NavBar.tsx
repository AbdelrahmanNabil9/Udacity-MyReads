import { useAppDispatch, useAppSelector } from "../store/index";
import classes from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthActions, AuthState } from "../store/slices/authanticationSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector<AuthState>((state) => state.auth);
  const dispatch = useAppDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
    navigate("/");
  };
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? classes.active : undefined;
            }}
            end
          > <button>Home</button>
            
          </NavLink>
        </li>

        <li>
          {!isAuth && !localStorage.getItem("logged") ? (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            > <button>LogIn</button>
            </NavLink>
          ) : (
            <>
              <NavLink onClick={logoutHandler} to="/">
              <button>Logout</button>
              </NavLink>
            </>
          )}
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
