import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";


export default function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.theme;
        // Default to dark mode if no saved preference
        if (savedTheme) {
            return savedTheme === "dark";
        }
        return true; // Default to dark
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
            localStorage.theme = "dark";
        } else {
            root.classList.remove("dark");
            localStorage.theme = "light";
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(prev => !prev)}
            className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center relative"
        >
            <AnimatePresence mode="wait" initial={false}>
                {dark ? (
                    <motion.div
                        key="sun"
                        initial={{ rotate: -90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: 90, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute text-yellow-400"
                    >
                        <Sun size={20} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="moon"
                        initial={{ rotate: 90, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        exit={{ rotate: -90, scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute text-black-600 dark:text-white"
                    >
                        <Moon size={20} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}