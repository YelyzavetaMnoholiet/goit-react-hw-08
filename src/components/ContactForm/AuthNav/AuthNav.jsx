import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <NavLink to="/register"></NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AuthNav;
