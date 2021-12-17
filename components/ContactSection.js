
const ContactSection = () => {
    return (
        <div className="bg-gray-800 pb-20">

            <div className="center-container ">
                <h1 className="text-stone-50 text-center text-3xl mt-24">My Recent Designs </h1>
            </div>


            <div className="flex flex-row  items-center justify-center w-full flex-wrap lg:flex-nowrap lg:px-96">
                <input className="bg-zinc-300  w-full m-2 h-8 pl-2" type="text" placeholder="Email"/>
                <input className="bg-zinc-300 w-full h-8 m-2 pl-2" type="text" placeholder="Name"/>
                
            </div>
            <div className="flex flex-row  items-center justify-center w-full flex-wrap lg:px-96">
                <textarea className="bg-zinc-300 m-2 pl-2 w-full h-15" ></textarea>
                
            </div>







        </div>);
}

export default ContactSection;