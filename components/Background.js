import Image from 'next/image';
import rocket from "../assets/rocket.png"
const Background = () => {
    return ( <div className="container absolute ">
       
        <div className="flex flex-row ml-20 bg-element -z-5 rocket">
           
            <Image src={rocket} width="260"  height="450"/>
        </div>
    </div> );
}
 
export default Background;