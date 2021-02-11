import i18n from "i18n-js";
import * as Localization from "expo-localization";

import hu from "./locale/hu";
import en from "./locale/en";

i18n.fallbacks = true;

i18n.translations = {
  hu,
  en,
};

i18n.locale = Localization.locale;

export default function $t(key, params = {}) {
  return i18n.t(key, params);
}
