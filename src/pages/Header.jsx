import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selector";
import { logoutThunk } from "../redux/auth/operations";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div>
      <nav className={styles.links}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
        {isLoggedIn ? (
          <button
            className={styles.button}
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        ) : (
          <>
            <NavLink to="/register" className={styles.link}>
              Register
            </NavLink>
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
          </>
        )}
      </nav>
      <h1 className={styles.header}>Книга контактів</h1>
      {isLoggedIn && <h2 className={styles.welcome}>Welcome, {user.name}</h2>}
    </div>
  );
};

export default Header;
