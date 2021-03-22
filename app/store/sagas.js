import * as noteSagas from "./note/sagas";
import * as authSagas from "./auth/sagas";
import * as productSagas from "./product/sagas";
import * as partnerSagas from "./partner/sagas";
//import * as storeSagas from "./store/sagas";

const sagas = {
  ...authSagas,
  ...noteSagas,
  ...productSagas,
  ...partnerSagas,
  //...storeSagas
};

export default sagas;
