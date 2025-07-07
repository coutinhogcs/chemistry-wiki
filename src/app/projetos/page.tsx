import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Projects - O Siris Project',
    description: 'Chemistry Project'
}

export default function Projects() {
    return (
        <div className="pt-6">
            <div className="mx-20 my-10">
            <h1 className="text-5xl font-bold pb-5">Project Title</h1>
            <div className="flex flex-col items-start justify-start text-3xl">
                <p>Subheading that sets up context, shares more info about the author,</p>
                <p> or generally gets people psyched to keep reading</p>
            </div>
            <div className="flex items-center justify-center m-10">
                <Image
                    src='/images/maracuja.png'
                    alt="maracuja"
                    width={1200}
                    height={1000}
                    className="rounded-4xl"
                />
            </div>

            <div className="flex flex-col items-center justify-center m-5">
                <div className="w-300 pb-10 text-2xl leading-10">
                    <p>
                        Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
                    </p>
                    <p className="pt-5">
                        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui  international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                    </p>
                    <p className="pt-5">Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</p>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center pb-10">
                <div className=" pr-50">
                    <Image
                        src='/images/mamao.png'
                        alt="mamao"
                        width={400}
                        height={300}
                        className="rounded-4xl"
                    />
                </div>
                <Image
                    src='/images/pera.png'
                    alt="pera"
                    width={475}
                    height={355}
                    className="rounded-4xl"
                />

            </div>

            <div className="flex flex-col items-center justify-center m-5">
                <div className="w-300 pb-10 text-2xl leading-10">
                    <p>
                        Excepteur efficient emerging, minim veniam anim cloying aute carefully curated gauche. Espresso exquisite perfect nostrud nisi intricate. Punctual adipisicing Borzoi, essential lovely tempor eiusmod irure. Exclusive izakaya charming Quezon City impeccable aute quality of life soft power pariatur occaecat discerning. Qui wardrobe aliquip, et Amadeus rock opera.
                    </p>
                    <p className="pt-5">
                        Exquisite sophisticated iconic cutting-edge laborum deserunt esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute wifey id.
                        Qui sunt remarkable deserunt intricate airport excepteur classic esse riot girl.
                    </p>
                </div>
            </div>
            <div className="mx-50">
                <h1 className="text-3xl font-bold pb-5 underline">Related articles or posts</h1>
            </div>
            <div className="flex flex-row items-center justify-center pb-10">
                <div className=" pr-50">
                    <Image
                        src='/images/mamao.png'
                        alt="mamao"
                        width={200}
                        height={200}
                        className="rounded-4xl" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <Image
                        src='/images/pera.png'
                        alt="pera"
                        width={230}
                        height={200}
                        className="rounded-4xl"
                    /><p>Lorem ipsum dolor sit amet</p>

                </div>
                <div className=" pl-50">
                    <Image
                        src='/images/mamao.png'
                        alt="mamao"
                        width={200}
                        height={400}
                        className="rounded-4xl" />
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                
            </div>
            <div className="border-2 w-40 h-15 rounded-2xl bg-blue-400 text-white flex items-center justify-center hover:bg-amber-300">
                <Link href='/' >
                    Go back to home!
                </Link>
            </div>
        </div>
        </div>
        
    )
}