"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Package } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link"; // ✅ Tambahkan import Link

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { label: "Home", href: "#home" },
        { label: "Features", href: "#features" },
        { label: "Demo", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <Package className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            WMS
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        )}
                        {/* ✅ Update Login button dengan Link */}
                        <Link href="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                        <Button>Get Started</Button>
                    </div>

                    {/* Mobile menu - tambahkan juga link login di mobile */}
                    <div className="md:hidden flex items-center space-x-2">
                        {mounted && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                {theme === "dark" ? (
                                    <Sun className="h-5 w-5" />
                                ) : (
                                    <Moon className="h-5 w-5" />
                                )}
                            </Button>
                        )}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 space-y-4 border-t border-border">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        {/* ✅ Tambahkan Login link di mobile menu */}
                        <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="outline" className="w-full">
                                Login
                            </Button>
                        </Link>
                        <Button className="w-full">Get Started</Button>
                    </div>
                )}
            </div>
        </nav>
    );
}