import { useContext } from "react";

import AuthContext from "./context";
import authStorage from "./storage";

export default (useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    // Localstore-ba syncelt adatokban vizsgálni, ebből kiszedni az adatokat...
    // const user = jwtDecode(authToken);
    const user = authToken;
    setUser(user);
    authStorage.storeToken(user.email);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut };
});
