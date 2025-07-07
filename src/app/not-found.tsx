import Link from "next/link";

export default function NotFound(){
    return(
        <div className="mt-10 flex flex-col justify-center items-center border-1 w-200  mx-auto p-6">
            <h1 className="text-5xl py-10 font-bold text-red-500">Error: 404 - Page not found!</h1>
            <p>This page you tried to access does not exist</p>
                <Link href='/' className="text-blue-900 text-lg py-2 underline">Voltar para página Home</Link>
        </div>
    )
}