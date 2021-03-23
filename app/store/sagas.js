import * as noteSagas from "./note/sagas";
import * as authSagas from "./auth/sagas";
import * as productSagas from "./product/sagas";
import * as partnerSagas from "./partner/sagas";
import * as warehouseSagas from "./warehouse/sagas";
import * as storageSagas from "./storage/sagas";

const sagas = {
  ...authSagas,
  ...noteSagas,
  ...productSagas,
  ...partnerSagas,
  ...warehouseSagas,
  ...storageSagas
};

export default sagas;
