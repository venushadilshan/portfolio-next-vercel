import Image from 'next/image'
import main from '../assets/Main.png'
import react_icon from '../assets/html-5.png';
import html_icon from '../assets/physics.png';
import node_icon from '../assets/node-js.png';
import js_icon from '../assets/js.png';
import css_icon from '../assets/css-3.png';
import xd_icon from '../assets/figma.png';
import figma_icon from '../assets/xd.png';


const Cover = () => {

    const iconSize = 40;
    return (
        <div className=" h-screen bg-gray-800 lg:bg-[url('../assets/bg.png')] bg-cover pt-20">
            <div className="flex flex-col justify-center item-center h-screen ">
                <div className="flex flex-row items-center justify-around flex-wrap">
                    <div className="flex flex-col w-1/2">
                    <h1 className="font-sans text-5xl font-thin text-stone-50 text-center "><span className="font-semibold">Hola!</span>👋<br></br>I'm VENUSHA </h1> 
                    <p className="font-sans text-lg text-stone-50 text-center ">Developer, UI Designer, Graphic Designer</p>
                    <div className="flex flex-row justify-evenly pt-8 px-40 w-full ">
                        <Image src={react_icon}  width={iconSize} height={iconSize} />
                        <Image src={html_icon}  width={iconSize} height={iconSize}/>
                        <Image src={css_icon}  width={iconSize} height={iconSize}/>
                        <Image src={js_icon}  width={iconSize} height={iconSize}/>
                        <Image src={node_icon}  width={iconSize} height={iconSize}/>
                        <Image src={figma_icon}  width={iconSize} height={iconSize}/>
                        <Image src={xd_icon}  width={iconSize} height={iconSize} />
                       
                     
                        
                    </div>
                    </div>
              
                 <div className="flex flex-col justify-center  w-4/5  lg:w-6/12">  
                   <Image src={main}   layout="responsive"/></div>
            
                </div>
            </div>
        </div>);
}

export default Cover;