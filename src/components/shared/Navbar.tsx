"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "../thems/ThemeSwitcher";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/projects", label: "Projects" },
        { href: "/blog", label: "Blogs" },
        { href: "/contact", label: "Contact" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    return (
        <nav className="border-b shadow-md bg-white dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold font-mono">
                    {`<Sakhawat/>`}
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${pathname === href
                                ? "text-teal-600 font-bold"
                                : "text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400"
                                } transition-colors`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Theme Switcher & Login Button */}
                <div className="hidden md:flex items-center space-x-4">
                    <ThemeSwitcher />
                    <Link
                        href="/login"
                        className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-white dark:bg-gray-900 transition-all">
                    {navLinks.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-gray-700 hover:text-teal-700 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </Link>
                    ))}

                    {/* Theme Switcher in Mobile Menu */}
                    <ThemeSwitcher />

                    {/* Mobile Login Button */}
                    <Link
                        href="/login"
                        className="px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
