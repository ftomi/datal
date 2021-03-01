import * as noteSagas from "./note/sagas";
import * as authSagas from "./auth/sagas";

const sagas = {
  ...authSagas,
  ...noteSagas
};

export default sagas;
