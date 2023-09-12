import { useState, useEffect } from "react";

export const useTheme = () => {
  const currentTheme =
    localStorage.getItem('theme') ||
    (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      "dark");
  const [theme, setTheme] = useState(currentTheme || "light");
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  const updateTheme = () => 
    setTheme(theme ==="dark" ? "light" : "dark");

  return [theme, updateTheme];
};


