import { useContext } from "react";

import ParamsContext from "./context";
import paramsStorage from "./storage";

export default (useParams = () => {
  const { store, setStore } = useContext(ParamsContext);

  const saveStore = (store) => {
    setStore(store);
    paramsStorage.storeStore(store);
  };

  return { store, saveStore };
});
