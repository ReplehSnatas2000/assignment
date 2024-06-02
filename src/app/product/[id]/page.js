"use client"
import { useState, useEffect } from "react";
import Rating from "@/components/Rating";

export default function ProductPage({ params }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API)
            .then(data => data.json())
            .then(data => setProducts(data));
    }, [products]);
    const product = products[params.id - 1];
    let desc = [];
    if (product) desc = product.description.split(";");
    return (
        product &&
        <div className="flex m-8 max-lg:flex-col justify-evenly">
            <div className="flex w-2/5 mb-6 max-lg:w-full justify-center items-center">
                <img className="size-80" src={`${product.image}`} alt="product image" />
            </div>
            <div className="flex w-3/5 max-lg:w-full flex-col">
                <div className="text-4xl">
                    {product.title}
                </div>
                <div className="mt-4 text-2xl">
                    &#36;{product.price}
                </div>
                <div className="mt-4 text-2xl">
                    <ul className="list-disc">
                        Product details:
                        {desc.map((data, index) => <li key={index} className="text-base ml-6">{data}.</li>)}
                    </ul>
                </div>
                <div className="mt-6 text-2xl">{product.rating.count} people have rated this product.</div>
                <div className="mt-4">
                    <button className="rounded-full max-lg:mb-2 mr-4 px-3 py-2 bg-yellow-500" type="button">Add to cart</button>
                    <button className="rounded-full px-3 py-2 bg-green-500" type="button">Buy now</button>
                </div>
                <div className="mt-4">
                    <Rating rating={`${product.rating.rate}`}/>
                </div>
            </div>
        </div>
    );
}