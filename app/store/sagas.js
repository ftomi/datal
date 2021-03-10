import * as noteSagas from "./note/sagas";
import * as authSagas from "./auth/sagas";
import * as productSagas from "./product/sagas";

const sagas = {
  ...authSagas,
  ...noteSagas,
  ...productSagas,
};

export default sagas;
