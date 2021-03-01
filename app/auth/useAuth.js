import { useContext } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth";

import AuthContext from "./context";
import authStorage from "./storage";

export default (useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const logIn = (authToken) => {
    // Localstore-ba syncelt adatokban vizsgálni, ebből kiszedni az adatokat...
    // const user = jwtDecode(authToken);
    const user = authToken;
    setUser(user);
    authStorage.storeToken(user.username);
  };

  const logOut = () => {
    dispatch(logout());
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
});
