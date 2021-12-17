import Image from 'next/image';
import tesla from "../assets/tesla.png";

import icon_project from '../assets/icon_project.svg';
const ImageCard = (props) => {
    return (     
        <div className="flex justify-between bg-slate-600 rounded  hover:scale-105  duration-150 flex flex-col self-start m-1 w-full lg:w-1/3" >
             
            <div className="flex flex-col  justify-center">
            <Image src={tesla} layout="responsive" className="rounded" />
           
          
         
            </div>
           
      
          
         
        </div> );
}
 
export default ImageCard;