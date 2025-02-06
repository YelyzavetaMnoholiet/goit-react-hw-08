import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import { Navigate } from "react-router-dom";

const PublicRout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};

export default PublicRout;
