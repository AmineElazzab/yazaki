import { useContext } from "react";
import { I18nContext } from "../i18n/i18n-context.tsx";

export function useLang() {
  return useContext(I18nContext);
}
