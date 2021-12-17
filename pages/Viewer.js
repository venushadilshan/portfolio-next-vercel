import { useRouter } from "next/router";
function Viewer(props) {

    const router = useRouter()
    return (  <div style={{height:"100vh", width:"100vw"}} className="flex flex-row items-center justify-center bg-gray-800 ">
        <iframe src={router.query.url} style={{width:"80%", height:"80%"}}  className="rounded"/>
    </div>);
}

export default Viewer;