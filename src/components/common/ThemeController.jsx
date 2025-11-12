import React, { useState, useEffect, useRef } from "react";
import { LuSunMoon } from "react-icons/lu";

const ThemeController = () => {
  const [theme, setTheme] = useState("system"); // "light" | "mytheme" | "system"
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // On mount, load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "mytheme") {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      setTheme("system");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", systemPrefersDark ? "mytheme" : "light");
    }
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light" || theme === "mytheme") {
      // user-selected override
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    } else {
      // system mode
      localStorage.removeItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute("data-theme", systemPrefersDark ? "mytheme" : "light");
    }
  }, [theme]);

  // Listen for system changes only if theme = "system"
  useEffect(() => {
    const listener = (e) => {
      if (theme === "system") {
        document.documentElement.setAttribute("data-theme", e.matches ? "mytheme" : "light");
      }
    };

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, [theme]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Icon Button */}
      <button
        className="p-2 bg-base-200 rounded-full shadow hover:bg-base-300 transition"
        onClick={() => setOpen(!open)}
      >
        {theme === "light" ? "☀️" : theme === "mytheme" ? "🌙" : <LuSunMoon></LuSunMoon>}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-base-100 shadow-lg rounded-md overflow-hidden z-50">
          <button
            className="w-full text-left px-4 py-2 hover:bg-base-200"
            onClick={() => {
              setTheme("light");
              setOpen(false);
            }}
          >
            ☀️ Light
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-base-200"
            onClick={() => {
              setTheme("mytheme");
              setOpen(false);
            }}
          >
            🌙 Dark
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-base-200"
            onClick={() => {
              setTheme("system");
              setOpen(false);
            }}
          >
            🖥 System
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeController;
