"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setTheme } from "../slices/themeSlice";

export default function ThemeInitializer() {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((s) => s.theme.mode);

  // Initialize theme from localStorage or prefers-color-scheme on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") {
        dispatch(setTheme(stored));
      } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        dispatch(setTheme("dark"));
      } else {
        dispatch(setTheme("light"));
      }
    } catch (e) {
      // ignore
    }
  }, [dispatch]);

  // Apply side-effects when mode changes: update document class and localStorage
  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", mode === "dark");
      localStorage.setItem("theme", mode);
    } catch (e) {
      // ignore
    }
  }, [mode]);

  return null;
}