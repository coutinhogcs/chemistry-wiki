import Image from "next/image";

 export default function FirstBody(){
    return(
        <div>
            <div className="flex justify-center ">
                <Image
                    src='/images/primeira-imagem.png'
                    alt="primeira-imagem"
                    width={1462}
                    height={831}
                />
            </div>
            <h1>Pagina Home</h1>
            <div className="flex justify-end w-full mx-auto max-w-8xl">
                <h1 className="text-2xl px-5">Dengue infects up to 400 million people every year,<br/>
                     according to the World Health Organization (WHO)</h1>
            </div>
        </div>
             
    )
}