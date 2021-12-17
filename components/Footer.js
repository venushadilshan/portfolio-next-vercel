import Link from "next/link";

const Footer = () => {
    return (<div className="flex flex-col bg-slate-600 w-full ">
        <hr style={{ width: "90%" }} className="self-center mb-10 text-zinc-700"></hr>
        <div className="flex flex-row  justify-around w-full flex-wrap w-full mb-10">
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5">Social Media</h1>
                <div className="flex flex-col">
                    <Link href="/"><a className="text-blue-400">Facebook</a></Link>
                    <Link href="/"><a className="text-blue-400">LinkedIn</a></Link>
                    <Link href="/"><a className="text-blue-400">Twitter</a></Link>
                    <Link href="/"><a className="text-blue-400">Instagram</a></Link>
                </div>

            </div>
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5">Quick Links</h1>
                <div className="flex flex-col">
                     <Link href="/"><a className="text-blue-400">Behance</a></Link>
                     <Link href="/"><a className="text-blue-400">GitHub</a></Link>
                     <Link href="/"><a className="text-blue-400">ICT Guru</a></Link>
                     <Link href="/"><a className="text-blue-400">Dribble</a></Link>
                </div>

            </div>
            

        </div>

    </div>);
}

export default Footer;