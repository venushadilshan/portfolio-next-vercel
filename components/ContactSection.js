
const ContactSection = () => {
    return (
        <div className="bg-gray-800 ">
            <div className="container ">

                <div className="center-container ">
                    <h1 className="text-stone-50 text-center text-3xl mt-44">Connect with Me</h1>
                </div>

                <div className="center-container" >

                    <div className="flex flex-col  items-center justify-center flex-wrap lg:flex-nowrap">
                        <input type="text" className="bg-gray-100 m-2 rounded h-8 pl-2" placeholder="Your Email"  style={{width:"350px"}}/>

                        <input type="text" className="bg-gray-100 w-1/2 m-2 rounded h-8 pl-2" placeholder="Your Email" style={{width:"350px"}}/>
                        
                    </div>
                    <div className="flex flex-row">
                    <textarea></textarea>
                    </div>








                </div>



            </div>

        </div>);
}

export default ContactSection;