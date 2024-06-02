"use client"
import { IoSearch } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import SearchList from "./SearchResults";

export default function SearchBar() {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);
    const [result, setResult] = useState([]);
    let inputRef = useRef();
    useEffect(() => {
        function handler(e) {
            if (!inputRef.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    });
    function fetchData(value) {
        fetch(process.env.NEXT_PUBLIC_API)
            .then(data => data.json())
            .then(data => {
                const results = data.filter(product => value && product && product.title && product.title.toLowerCase() && product.title.toLowerCase().includes(value.toLowerCase()));
                setResult(results);
                setOpen(true);
            });
    }
    function handleChange(value) {
        setInput(value);
        fetchData(value);
        setOpen(true);
    }
    return (
        <div className="flex max-sm:w-full w-1/3 grow items-center justify-around relative">
            <IoSearch className="absolute left-8 xl:left-7 md:left-5 sm:left-4 text-xl" />
            <input ref={inputRef} className="shadow min-w-24 hover:border-[royalblue] appearance-none border rounded-full w-11/12 py-2 
                            px-3 pl-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="search" value={input} onChange={e => handleChange(e.target.value)} />
            {result && <SearchList open={open} result={result} />}
        </div>
    );
}  