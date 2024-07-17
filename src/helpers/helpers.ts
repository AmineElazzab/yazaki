export const DATA_LAYOUT_MODE = "data-layout-mode";
export const DIR = "dir";
export const LANG = "lang";

export function changeHTMLAttribute(attribute: string, value: string) {
  if (document.documentElement) {
    document.documentElement.setAttribute(attribute, value);
  }
}
