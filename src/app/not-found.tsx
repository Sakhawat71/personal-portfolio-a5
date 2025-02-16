import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl mt-2">Oops! Page not found.</p>
            <Link href="/" className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
                Go Home
            </Link>
        </div>
    );
}
