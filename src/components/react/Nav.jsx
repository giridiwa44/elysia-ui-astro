import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Handle dark mode toggle
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load saved theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <header className="bg-background sticky top-0 z-50 w-full border-b border-border/30 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-wrapper 3xl:fixed:px-0 px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 text-sm font-medium">
            🌸 <span className="hidden sm:inline">Elysia UI</span>
          </a>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center">
              {[
                { label: "Home", href: "/" },
                { label: "Docs", href: "/docs/introduction" },
                { label: "Components", href: "/docs/components" },
              ].map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink asChild>
                    <a
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="ml-auto flex items-center gap-3">
            {/* Search button */}
            <div className="hidden md:flex">
                <Button variant="outline" className="inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-secondary/80 px-4 py-2 has-[>svg]:px-3 bg-surface text-foreground dark:bg-card relative h-8 w-full justify-start pl-3 font-medium shadow-none sm:pr-12 md:w-48 lg:w-56 xl:w-64">
                 <span className="hidden lg:inline-flex">Search Documentation...</span>
                 <span className="inline-flex lg:hidden">Search ...</span>
                 <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                    <kbd className="inline-flex items-center gap-1">
                        <kbd>Ctrl</kbd>
                        <kbd>K</kbd>
                  </kbd>
                 </div>
                </Button>
            </div>

            {/* Separator */}
            <Separator orientation="vertical" className="hidden md:flex h-5" />

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <Sun strokeWidth={1.5} className="w-5 h-5" />
              ) : (
                <Moon strokeWidth={1.5} className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <div className="md:hidden inline-flex">
              <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
                {open ? <X /> : <Menu />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* 🌸 Mobile Menu (Slide Down) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="absolute top-[60px] inset-x-0 z-40 bg-background border-b border-border/30 shadow-md md:hidden"
          >
            <div className="flex flex-col p-4 space-y-3">
              <a
                href="/"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Home
              </a>
              <a
                href="/docs/introduction"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Docs
              </a>
              <a
                href="docs/components"
                className="text-base font-medium hover:text-primary"
                onClick={() => setOpen(false)}
              >
                Components
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
