import Image from 'next/image';


import icon_project from '../assets/icon_project.svg';
const ImageCard = (props) => {
    return (     
        <div className="flex flex-col justify-between bg-slate-600 rounded  hover:scale-105  duration-150  self-start w-full m-2 lg:w-3/6" >
             
          
            <Image src={props.image}  className="rounded"/>
           
          
         
           
           
      
          
         
        </div> );
}
 
export default ImageCard;