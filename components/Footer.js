import Link from "next/link";

const Footer = () => {
    return (<div className="flex flex-col bg-slate-600 w-full ">
        <hr style={{ width: "90%" }} className="self-center mb-10 text-zinc-700"></hr>
        <div className="flex flex-row  justify-around w-full flex-wrap w-full mb-10">
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5 z-20">Social Media</h1>
                <div className="flex flex-col z-20">
              <a href="https://facebook.com/venusha.dilshan" target="_blank" className="text-blue-400 z-20">Facebook</a>
                    <a href="https://twitter.com/VenushaDilshan" target="_blank" className="text-blue-400 z-20">Twitter</a>
                    <a href="https://www.instagram.com/venusha_dilshan_/" target="_blank" className="text-blue-400 z-20">Instagram</a>
                    <a href="https://www.linkedin.com/in/venushadilshan/" target="_blank" className="text-blue-400 z-20">LinkedIn</a>
                </div>

            </div>
            <div>
                <h1 className="text-zinc-300 text-2xl mb-5">Quick Links</h1>
                <div className="flex flex-col">
                     <a href="https://github.com/venushadilshan" target="_blank" className="text-blue-400">GitHub</a>
                     <a href="https://ictguru.lk" target="_blank" className="text-blue-400 z-20">ICT Guru</a>
                     <a href="https://dribbble.com/venusha" target="_blank" className="text-blue-400 z-20">Dribble</a>
                     <a href="https://behance.net/venushadilshan" target="_blank" className="text-blue-400 z-20">Behance</a>
                </div>

            </div>
            

        </div>

    </div>);
}

export default Footer;