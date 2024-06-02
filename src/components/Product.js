import Link from "next/link";
import Rating from "./Rating";

export default function Product({ details }) {
    return (
        <div className="border max-lg:w-2/5 flex w-1/5 flex-col max-sm:w-11/12 items-center justify-center rounded-md m-2 divide-gray-300">
            <div className="flex justify-center items-center w-full">
                <img className="size-44 m-4" src={`${details.image}`} alt="product image" />
            </div>
            <div className="bg-[whitesmoke] w-full">
                <div className="text-xl m-4">
                    <Link className="hover:text-red-600" href={`/product/${details.id}`}>{details.title}</Link>
                </div>
                <div className="mx-4 text-lg">
                    &#36;{details.price}
                </div>
                <div className="mx-4 mb-4 text-slate-500">
                    {details.category}
                </div>
                <div className="mx-4 mb-4">
                    <Rating rating={`${details.rating.rate}`} />
                </div>
            </div>
        </div>
    );
}