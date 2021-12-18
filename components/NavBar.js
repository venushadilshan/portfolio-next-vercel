import { useReducer, useState } from 'react';
import Image from 'next/image';
import logo from "../assets/logo.svg";
import Link from 'next/link';
import { useRouter } from "next/router";



const NavBar = (props) => {
    const router = useRouter();


    const [mobileMenu, setmobileMenu] = useState("none")
    const [defaultActive, setDefaultActive] = useState("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")
    const [homeActive, setHomeActive] = useState("bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium")
    const [projectActive, setProjectActive] = useState("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")
    const [contactActive, setContactActive] = useState("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")

    const [defaultNav, setDefaultTab] = useState("text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium")
    const [activeNav, setActiveNav] = useState("bg-violet-500 text-white px-3 py-2 rounded-md text-sm font-medium")

    function openMenu() {
        if (mobileMenu == "none") {
            setmobileMenu("flex")
        }
        else if (mobileMenu == "flex") {
            setmobileMenu("none")
        }
    }

    function changeNavActive(tabName) {
        if (tabName == "project") {
            setHomeActive(defaultActive)
            setProjectActive("bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium")

        }

        else if (tabName == "home") {
            setProjectActive(defaultActive)
            setHomeActive("bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium")

        }
    }


    return (

        <nav className="bg-gray-800 py-2 fixed w-screen z-10 backdrop-blur-md">
            <div className="flex flex-row justify-between items-center">
                <a class="text-white px-3 py-2  text-sm font-medium ml-5"><Image src={logo} width="60" height="30"/></a>
                <div>
                    <div className="text-slate-50 lex space-x-4 ">
                        <a class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium md:hidden mr-5" onClick={openMenu}>Menu</a>



                    </div>
                    <div class="hidden sm:block sm:ml-6  mr-10 items-center  md:flex sm:hidden ld:flex">
                        <div className="text-slate-50 lex space-x-4 ">
                            <Link href="/"><a className={router.pathname == "/" ? activeNav : defaultNav}>Home</a></Link>
                            <Link href="/#projects" ><a className={router.pathname == "/#projects" ? activeNav : defaultNav}>Projects</a></Link>
                            <Link href="/#contact"><a className={router.pathname == "/#contact" ? activeNav : defaultNav}>Contact</a></Link>

                        </div>
                    </div>

                </div>

            </div>

            <div className="contaier" style={{ display: mobileMenu }}>
                <div className="flex flex-row justify-start">
                    <div className="flex flex-col ml-5 ">
                        <a class="text-gray-300 hover:bg-blue-700 hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Home</a>
                        <a class="text-gray-300 hover:bg-blue-700 hover:text-blue px-3 py-2 rounded-md text-sm font-medium">Project</a>
                        <a class="text-gray-300 hover:bg-blue-700 hover:text-blue px-3 py-2 rounded-md text-sm font-medium ">Contact</a>
                    </div>
                </div>


            </div>
        </nav>
    );
}

export default NavBar;