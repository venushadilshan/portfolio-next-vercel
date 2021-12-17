import Image from 'next/image';

import icon_project from '../assets/icon_project.svg';
const ProjectCard = (props) => {
    return (     
        <div className="flex justify-between bg-slate-600 rounded p-5 pt-10 hover:scale-105  duration-150 flex flex-col self-start m-5 lg:mt-1 w-full lg:w-52 lg:h-72">
             
            <div className="flex flex-col  justify-start">
            <Image src={icon_project} width="80" height="80" />
           
            <h1 className="font-sans text-center text-zinc-100 text-lg mt-5">{props.projectName}</h1>
            <p className="text-center text-zinc-400">{props.projectDescription}</p>
            </div>
           
      
            <button className=" text-sky-500 px-2 py-1 mt-1 rounded hover:text-sky-600">Learn More</button>
         
        </div> );
}
 
export default ProjectCard;