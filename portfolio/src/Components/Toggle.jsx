import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

export const Toggle = () => {
  const [darkMode, setDarkMode] = useState(true);


  useEffect(() => {
   localStorage.setItem("theme", "dark");
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
   
  }, []);


  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-15 right-3 z-50 p-2 rounded-full transition-colors duration-3000",
        "focus:outline-hidden"
      )}
    >
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
