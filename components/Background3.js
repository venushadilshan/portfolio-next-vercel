import Image from "next/image";
import bg from "../assets/bg3.png"
const Background3 = () => {
    return ( <div className="container fixed float-anim -z-5">
       
    <div className="flex flex-row items-start justify-start pl-44   bg-element -z-5  "  style={{width:"95vw"}}>
       
        <Image src={bg} width="250"  height="800"/>
    </div>
</div> );
}
 
export default Background3;