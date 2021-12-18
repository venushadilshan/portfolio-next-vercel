import axios from "axios";
import { useState } from "react";

const ContactSection = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const onsubmit = (e) => {
        e.preventDefault()
        const endpoint = "https://venusha.com/api/email.php"
        const formData = new FormData();
        formData.append("name", name)
        formData.append("email", email)
        formData.append("msg", msg)
        axios.post(endpoint, formData)
            .then(res => (console.log(res.data)))
            .catch(err => console.log(err))


    }

    return (
        <div className="bg-gray-800 pb-20">

            <div className="center-container ">
                <h1 className="text-stone-50 text-center text-3xl mt-24">Connect with me </h1>
            </div>
            <form
                onSubmit={onsubmit}

            >


                <div className="flex flex-row  items-center justify-center w-full flex-wrap lg:flex-nowrap lg:px-96 mt-10">
                    <input onChange={(e) => { setEmail(e.target.value); console.log(email) }} name="email" value={email} className="bg-zinc-300  w-full m-2 h-8 pl-2" type="text" placeholder="Email" />
                    <input onChange={(e) => { setName(e.target.value); console.log(name) }} name="name" value={name} className="bg-zinc-300 w-full h-8 m-2 pl-2" type="text" placeholder="Name" />

                </div>
                <div className="flex flex-row  items-center justify-center w-full flex-wrap lg:px-96">
                    <textarea onChange={(e) => { setMsg(e.target.value); console.log(msg) }} name="msg" value={msg} className="bg-zinc-300 m-2 pl-2 w-full h-72" placeholder="Message"></textarea>

                </div>
                <div className="flex flex-row  items-center justify-center w-full flex-wrap lg:px-96">
                    <input type="submit" className="bg-violet-500 text-zinc-50 w-full m-3 lg:w-1/2 py-2 rounded hover:bg-violet-600 px-5" />

                </div>

            </form>





        </div>);
}

export default ContactSection;