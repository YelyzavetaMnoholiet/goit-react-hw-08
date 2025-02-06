import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";
import Navigation from "../ContactForm/Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <div>
        <Navigation />
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};

export default AppBar;
