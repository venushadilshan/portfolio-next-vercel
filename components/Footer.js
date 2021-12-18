import Link from "next/link";

const Footer = () => {
    return (<div className="flex flex-col bg-slate-600 w-full ">
        <hr style={{ width: "90%" }} className="self-center mb-10 text-zinc-700"></hr>
        <div className="flex flex-row  justify-around w-full flex-wrap w-full mb-10">
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5 z-20">Social Media</h1>
                <div className="flex flex-col z-20">
                <Link href={{pathname: "https://facebook.com/venusha.dilshan" }}><a className="text-blue-400 z-20">Facebook</a></Link>
                    <Link href={{pathname: "https://twitter.com/VenushaDilshan" }}><a className="text-blue-400 z-20">Twitter</a></Link>
                    <Link href={{pathname: "https://www.instagram.com/venusha_dilshan_/" }}><a className="text-blue-400 z-20">Instagram</a></Link>
                    <Link href={{pathname: "https://www.linkedin.com/in/venushadilshan/" }}><a className="text-blue-400 z-20">LinkedIn</a></Link>
                </div>

            </div>
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5">Quick Links</h1>
                <div className="flex flex-col">
                     <Link href={{pathname: "https://github.com/venushadilshan" }}><a className="text-blue-400">GitHub</a></Link>
                     <Link href={{pathname: "https://ictguru.lk" }}><a className="text-blue-400 z-20">ICT Guru</a></Link>
                     <Link href={{pathname: "https://dribbble.com/venusha" }}><a className="text-blue-400 z-20">Dribble</a></Link>
                     <Link href={{pathname: "https://behance.net/venushadilshan" }}><a className="text-blue-400 z-20">Behance</a></Link>
                </div>

            </div>
            

        </div>

    </div>);
}

export default Footer;