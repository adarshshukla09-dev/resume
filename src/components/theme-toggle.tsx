"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("portfolio-theme-change", onChange);
  return () => window.removeEventListener("portfolio-theme-change", onChange);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, () => true);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("portfolio-theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
    >
      {isDark ? <Sun size={16} strokeWidth={1.7} /> : <Moon size={16} strokeWidth={1.7} />}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
