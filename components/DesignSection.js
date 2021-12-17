

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


                    <div className="flex flex-row items-start justify-around mb-10 w-full px-1 lg:px-40 flex-wrap z-20 ">

                        <ImageCard projectDescription="Intelligent Plant Disease Detection System" projectName="Dr.Plant" />
                        <ImageCard projectDescription="Intelligent Plant Disease Detection System" projectName="Dr.Plant" />
                        <ImageCard projectDescription="Intelligent Plant Disease Detection System" projectName="Dr.Plant" />
                       







                    </div>
                </div>

            </div>

        </div>);
}

export default DesignSection;