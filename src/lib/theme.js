import { useCallback, useEffect, useState } from "react";

const read = () => document.documentElement.dataset.theme || "dark";

export function useTheme() {
  const [theme, setTheme] = useState(read);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0b0b0c" : "#f6f5f0");
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    [],
  );
  return [theme, toggle];
}
