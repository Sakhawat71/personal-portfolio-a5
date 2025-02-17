"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "../ThemeSwitcher";

const Navbar = () => {
    const pathname = usePathname();
    const linkStyle = (path : any) =>
        `px-4 py-2 ${pathname === path ? "text-blue-500 font-bold" : "text-gray-700"}`;

    return (
        <nav className="bg-gray-100 shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">MyApp</h1>
                <div className="flex space-x-4">
                    <Link href="/" className={linkStyle("/")}>Home</Link>
                    <Link href="/products" className={linkStyle("/products")}>Products</Link>
                    <Link href="/about" className={linkStyle("/about")}>About</Link>
                    <Link href="/contact" className={linkStyle("/contact")}>Contact</Link>
                    <Link href="/login" className={linkStyle("/login")}>Login</Link>
                    <Link href="/register" className={linkStyle("/register")}>Register</Link>
                    <ThemeSwitcher />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;