

import Link from 'next/link';
import ProjectCard from './ProjectCard';
const ProjectSection = () => {
    return (
        <div className="bg-gray-800 ">
            <div className="container ">

                <div className="center-container ">
                    <h1 className="text-stone-50 text-center text-3xl mt-24">My Recent Projects </h1>
                </div>


                <div className="center-container mt-20 ">


                    <div className="flex flex-row items-start justify-evenly mb-10 w-full px-1 lg:px-40 flex-wrap z-20 ">

                        <ProjectCard projectDescription="Intelligent Plant Disease Detection System" projectName="Dr.Plant" />
                        <ProjectCard projectDescription="A daily news app" projectName="Exypnos " />
                        <ProjectCard projectDescription="#1 ICT Learning App in Sri Lanka" projectName="ICT Guru" />
                        <ProjectCard projectDescription="Next-gen Learning Management System" projectName="Phoenix LMS" />
                        <ProjectCard projectDescription="Smart QR Attendance System and App" projectName="IQR - Smart Attendance System " />


                        <ProjectCard projectDescription="SFT Panthiya Official App, Website and CMS" projectName="A/L Technology" />


                    </div>
                </div>
                <div className="center-container">
                    <Link href={{
                        pathname: '/Viewer',
                        query: { url: 'https://github.com/venushadilshan' },
                    }}><div className="bg-violet-500 self-center text-slate-200 px-4 py-5 w-44 rounded  hover:bg-violet-800 duration-200 ">See more on GitHub</div></Link>
                </div>
            </div>

        </div>);
}

export default ProjectSection;