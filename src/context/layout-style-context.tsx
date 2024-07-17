import React, { createContext, useEffect, useState } from "react";
import { DATA_LAYOUT_MODE, changeHTMLAttribute } from "../helpers/helpers";
import { useLocalStorage } from "react-use";

type LayoutContextPropsType = {
  children: JSX.Element | JSX.Element[];
};

export type layoutModeType = "dark" | "light";
type LayoutContextType = {
  layoutMode: layoutModeType;
  height: number;
  width: number;
  toggleDarkMode?: () => void;
};
export const LayoutContext = createContext<LayoutContextType>({
  layoutMode: "light",
  height: window.innerHeight,
  width: window.innerWidth,
});

export function LayoutStyleContextProvider({
  children,
}: LayoutContextPropsType): JSX.Element {
  const [layoutMode, setLayoutMode] = useState<layoutModeType>("light");
  const [layoutModeLocalStorage, setLayoutModeLocalStorage] =
    useLocalStorage(DATA_LAYOUT_MODE);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateDimensions = (): void => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const toggleLayoutMode = (newLayoutMode: layoutModeType) => {
    setLayoutMode(newLayoutMode);
    setLayoutModeLocalStorage(newLayoutMode);
    changeHTMLAttribute("class", newLayoutMode);
  };

  function initLayoutMode() {
    const layoutMode = (layoutModeLocalStorage || "light") as layoutModeType;
    toggleLayoutMode(layoutMode);
  }

  const toggleDarkMode = () => {
    const mode = layoutMode === "dark" ? "light" : "dark";
    toggleLayoutMode(mode);
  };

  useEffect(() => {
    initLayoutMode();
  }, []);

  const value = React.useMemo(
    () => ({ layoutMode, toggleDarkMode, width, height }),
    [layoutMode, height, width],
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
}
