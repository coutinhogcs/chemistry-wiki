import Link from "next/link";

export  function Header(){
    return(
        //fazer um dropdown com subitens em cada item, pesquisar ao chatgpt como faz
        <header className="fixed top-0 w-full bg-white/30 backdrop-blur-md z-50 shadow-md  h-15">
            <div className="max-w-9xl mx-auto px-2 py-3 flex items-center justify-between ">
                <div ><h1 className="text-3xl font-bold"><Link href='/'>O Siris RIO</Link></h1></div>

                <nav>
                    <ul className="flex items-center justify-center gap-10 text-lg ">
                        <li><Link href='/projetos'>Project</Link></li>
                        <li><Link href='/wetlab'>Wet Lab</Link></li>
                        <li><Link href='/dryla'>Dry Lab</Link></li>
                        <li><Link href='/human-practice'>Human Practice</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}