"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-100 text-red-800">
            <h1 className="text-3xl font-bold">Something Went Wrong!</h1>
            <p className="mt-2">{error.message || "An unexpected error occurred."}</p>
            <button
                onClick={() => reset()}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg"
            >
                Try Again
            </button>
        </div>
    );
}
