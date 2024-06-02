"use client"
import Link from "next/link";
import SearchBar from "./SearchIcon";

export default function Navbar() {
    return (
        <nav className="bg-slate-200 border-b-2 sticky top-0 border-gray-600 py-5">
            <div className="w-full max-sm:flex-col max-sm:justify-center mx-auto px-6 flex justify-between items-center">
                <div className="w-2/3 max-sm:w-full max-sm:text-center max-sm:mb-4 grow-0">
                    <Link href="/" className="text-2xl font-medium">MyApp</Link>
                </div>
                <SearchBar />
            </div>
        </nav>
    );
}