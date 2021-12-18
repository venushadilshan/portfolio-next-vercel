import Image from "next/image";
import bg from "../assets/bg2.png"
const Background2 = () => {
    return ( <div className="container fixed  float-anim -z-5">
       
    <div className="flex flex-row items-end justify-end   bg-element -z-5  "  style={{width:"95vw"}}>
       
        <Image src={bg} width="800"  height="600"/>
    </div>
</div> );
}
 
export default Background2;