import React, { createContext, useEffect, useState } from "react";
import { I18nContextPropsType, I18nContextType } from "./types";
import { LANG } from "../layout/helpers";
import { changeHTMLAttribute } from "../helpers/helpers";
import { useLocalStorage } from "react-use";

export const I18nContext = createContext<I18nContextType>({
  lang: "fr",
});

function I18nContextProvider({ children }: I18nContextPropsType): JSX.Element {
  const [langLocalStorage, setLangModeLocalStorage] = useLocalStorage(LANG);
  const [lang, setLang] = useState<string>("en");

  function initLayoutLanguage() {
    const layoutMode = (langLocalStorage || "fr") as string;
    changeLanguage(layoutMode);
  }

  const changeLanguage = React.useCallback(
    (language: string) => {
      setLang(language);
      setLangModeLocalStorage(language);
      changeHTMLAttribute(LANG, language);
    },
    [changeHTMLAttribute, setLang],
  );

  const value = React.useMemo(
    () => ({ lang, changeLanguage }),
    [lang, changeLanguage],
  );

  useEffect(() => {
    initLayoutLanguage();
  }, []);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export default I18nContextProvider;
