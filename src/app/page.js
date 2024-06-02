"use client"
import { useEffect, useState } from "react";
import Product from "@/components/Product";

export default function Home() {
  const [dataArray, setData] = useState([]);
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API)
      .then(data => data.json())
      .then(data => setData(data));
  }, [dataArray]);
  return (
    <>
      <div className="text-6xl m-4 mt-6 max-lg:text-center">Products</div>
      <div className="flex items-center justify-evenly flex-wrap max-sm:flex-col">
        {dataArray && dataArray.map(product => <Product details={product} key={product.id} />)}
      </div>
    </>
  );
}