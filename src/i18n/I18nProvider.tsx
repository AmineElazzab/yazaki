import { useContext } from "react";
import { IntlProvider } from "react-intl";
import { I18nContext } from "./i18n-context";
import arMessages from "./messages/ar.json";
import enMessages from "./messages/en.json";
import frMessages from "./messages/fr.json";

import { I18nProviderType } from "./types";

 
const allMessages: Record<string, any> = {
  fr: frMessages,
  en: enMessages,
  ar: arMessages,
};

export function I18nProvider({ children }: I18nProviderType): JSX.Element {
  const { lang } = useContext(I18nContext);
  const locale = lang;
  const messages = allMessages[locale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
}
