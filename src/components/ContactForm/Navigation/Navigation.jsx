import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selector";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts"></NavLink>}
    </nav>
  );
};

export default Navigation;
