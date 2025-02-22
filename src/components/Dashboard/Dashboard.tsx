"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes, FaUsers, FaBox, FaShoppingCart } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";

const DashboardClient = ({ user }: { user: any }) => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const adminLinks = [
        { href: "/dashboard/blogs", label: "Manage Users", icon: FaUsers },
        { href: "/dashboard/projects", label: "Add Product", icon: FaBoxesStacked },
        { href: "/dashboard/messages", label: "Manage Products", icon: FaBox },
        // { href: "/dashboard/manage-orders", label: "Manage Orders", icon: FaShoppingCart },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto min-h-screen p-4">
            {/* Mobile Sidebar Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#44b584] text-white rounded-lg shadow-lg"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed md:static inset-y-0 left-0 w-64 bg-slate-50 shadow-2xl rounded-2xl font-roboto transform transition-transform duration-300 ease-in-out z-40
                            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            >
                <div className="pt-6 text-center">
                    <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                        <figure>
                            <Image
                                src="/books.png" // Make sure this file is in your public folder
                                alt="logo"
                                width={40}
                                height={40}
                                className="mx-auto"
                            />
                            <p className="font-bold pt-1">BookNest Admin</p>
                        </figure>
                    </Link>

                    <ul className="space-y-3 py-10 mx-5 font-semibold text-lg">
                        {adminLinks.map(({ href, label, icon: Icon }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
                                        pathname === href ? "text-[#44b584] font-semibold" : "text-gray-700 hover:text-teal-600"
                                    }`}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <Icon className="text-lg" />
                                    {label}
                                </Link>
                            </li>
                        ))}
                        <hr className="py-2" />
                    </ul>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 bg-slate-50 shadow-2xl rounded-2xl p-6">
                <h2 className="text-xl font-bold">Welcome, {user?.name || "Admin"}!</h2>
                {/* Dynamically load content */}
            </main>
        </div>
    );
};

export default DashboardClient;
