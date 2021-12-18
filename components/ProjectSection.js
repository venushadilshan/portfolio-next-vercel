

import Link from 'next/link';
import ProjectCard from './ProjectCard';
const ProjectSection = () => {
    return (
        <div className="bg-gray-800 ">
            <div className="container ">

                <div className="center-container z-20 " id="projects">
                    <h1 className="text-stone-50 text-center text-3xl mt-44 z-20">My Recent Projects </h1>
                </div>


                <div className="center-container mt-20 ">


                    <div className="flex flex-row items-start justify-between md:justify-start  mb-10 w-full lg:px-40 flex-wrap z-20 ">

                        <ProjectCard linkTo={"https://drplant.venusha.com/app"} projectDescription="Intelligent Plant Disease Detection System" projectName="Dr.Plant" />
                        <ProjectCard linkTo={"https://github.com/ipmanlk/exypnos-app"} projectDescription="A daily news app" projectName="Exypnos " />
                        <ProjectCard  linkTo={"https://ictguru.lk"} projectDescription="#1 ICT Learning App in Sri Lanka" projectName="ICT Guru" />
                        <ProjectCard  linkTo={"https://github.com/ipmanlk/Phoenix-LMS"} projectDescription="Next-gen Learning Management System" projectName="Phoenix LMS" />
                        <ProjectCard linkTo={"https://github.com/TeamDMX/SmartAttendance-UI"} projectDescription="Smart QR Attendance System and App" projectName="IQR - Smart Attendance System " />


                        <ProjectCard linkTo={"https://altechnology.lk/"}  projectDescription="SFT Panthiya Official App, Website and CMS" projectName="A/L Technology" />


                    </div>
                </div>
                <div className="center-container">
                    <Link href={{pathname: 'https://github.com/venushadilshan' }}><div className=" z-20 bg-violet-500 self-center text-slate-200 px-4 py-5 w-44 rounded  hover:bg-violet-800 duration-200 text-center">See more on GitHub</div></Link>
                </div>
            </div>

        </div>);
}

export default ProjectSection;