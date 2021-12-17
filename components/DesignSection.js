
import tesla from "../assets/tesla.png";
import lono from "../assets/lono.png";
import travel from "../assets/travel.png";
import playhub from "../assets/playhub.png";
import ImageCard from './ImageCard';
import ProjectCard from './ProjectCard';
const DesignSection = () => {
    return (
        <div className="bg-gray-800 ">
            <div className="container ">

                <div className="center-container ">
                    <h1 className="text-stone-50 text-center text-3xl mt-24">My Recent Designs </h1>
                </div>


                <div className="center-container mt-20 ">


                    <div className="flex flex-row items-start justify-evenly mb-10 w-full px-5 lg:px-40 px-1 z-20 flex-wrap lg:flex-nowrap ">

                        <ImageCard image={tesla} />
                        <ImageCard image={travel} />
                        <ImageCard image={playhub} />
                        <ImageCard image={lono} />
                       
                       







                    </div>
                </div>

            </div>

        </div>);
}

export default DesignSection;