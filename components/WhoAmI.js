
import Image from 'next/image';
import icon_ui from '../assets/icon_ui.svg';
import icon_dev from '../assets/icon_dev.svg';
import icon_design from '../assets/icon_design.svg';
const WhoAmI = () => {
    return (
    <div className="bg-gray-800 ">
        <div className="container  ">
          
                <div className="center-container ">
                <h1 className="text-stone-50 text-center text-3xl mt-24">What I Am Doing?</h1>
                </div>
         

           <div className="center-container mt-20 ">

               
            <div className="flex flex-row items-center justify-evenly mb-10 w-4/6 flex-wrap z-20 ">
            <div className="flex flex-col items-center justify-start self-start  mt-5 lg:mt-1">
               
                <Image src={icon_dev} width="80" height="80" />
                <h1 className="font-sans text-zinc-400 text-lg mt-5 backdrop-blur-md ">Front-End Developing</h1>
                <a href="https://github.com/venushadilshan" target="_blank" className="text-blue-400 z-20"><button className=" text-sky-500 px-2 py-1 mt-1 rounded hover:text-sky-600">See Projects</button></a>
             
               
            </div>
            <div className="flex flex-col items-center self-start mt-5 lg:mt-1">
               
               <Image src={icon_ui} width="80" height="80" />
               <h1 className="font-sans text-zinc-400 text-lg mt-5 ">UI UX Designing</h1>
               <a href="https://behance.net/venushadilshan" target="_blank" className="text-blue-400 z-20"><button className=" text-sky-500 px-2 py-1 mt-1 rounded hover:text-sky-600">Behance</button></a>
              
              
           </div>
           <div className="flex flex-col items-center self-start mt-5 lg:mt-1">
               
               <Image src={icon_design} width="80" height="80" />
               <h1 className="font-sans text-zinc-400 text-lg mt-5">Graphic Designing</h1>
               <a href="https://behance.net/venushadilshan" target="_blank" className="text-blue-400 z-20"><button className=" text-sky-500 px-2 py-1 mt-1 rounded hover:text-sky-600">Behance</button></a>
            
           </div>
            
            </div>
            </div>
           
        </div>
        
    </div>);
}

export default WhoAmI;