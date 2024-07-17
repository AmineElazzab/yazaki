import { useState } from "react";

const languageList = [
  { label: "Français", value: "fr" },
  { label: "English", value: "en" },
  { label: "العربية", value: "ar" },
];

export const useLanguages = () => {
  const [languages /*, setLanguages*/] =
    useState<{ label: string; value: string }[]>(languageList);
  return { languages };
};
