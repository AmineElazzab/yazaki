export type I18nProviderType = {
    children: JSX.Element;
};


export type I18nContextType = {
    lang: string;
    changeLanguage?: (language: string) => void;
    // direction: string;
};

export type I18nContextPropsType = {
    children: JSX.Element;
};