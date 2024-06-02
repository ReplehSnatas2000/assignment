import Link from "next/link";

export default function SearchList({ result, open }) {
    return (
        <div className={`${!open && "hidden"} max-h-[200px] divide-y divide-slate-400 overflow-y-auto w-5/6 rounded-md absolute top-12 bg-slate-100`}>
            {result.map(data => <div key={data.id} className="text-center hover:bg-[#efefef] p-2"><Link href={`/product/${data.id}`}>{data.title}</Link></div>)}
        </div>
    );
}