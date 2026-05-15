import {useEffect, useState} from "react";
import Project from "@/app/components/Project";
import ProjectNavBar from "@/app/components/ProjectNavBar";
import ProjectNavBarMobile from "@/app/components/ProjectNavBarMobile";

export default function Projects() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch(`./projects.json`);
            let data = await response.json();
            setData(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div id="projects"
             className="w-full bg-primary sm:p-10 sm:pb-15 pb-15 p-5 text-secondary flex flex-col">
            <h2 className="font-druk uppercase text-7xl pb-12 sm:pt-12 pt-20">Projekte</h2>
            <div className="bg-zinc-200 font-josefin rounded-xl flex flex-col text-black">
                <div className="flex pr-5 gap-2 p-4">
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-yellow-500 w-3 h-3 rounded-full"></div>
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                </div>
                <div className="flex flex-col  bg-secondary overflow-hidden">
                    <div className="hidden scrollbar-hide sm:flex bg-zinc-300 justify-start overflow-x-auto items-start pt-0.5">
                        <div className="flex flex-nowrap gap-0.25">
                        {data.projects && data.projects.map((project) => (
                            <ProjectNavBar key={project.id} project={project}/>
                        ))}
                        </div>
                    </div>
                    {data.projects && data.projects.map((project) => (
                        <Project key={`${project.id}-${project.name}`} project={project}/>
                    ))}
                    <div className="sm:hidden flex justify-center items-center p-2 gap-1 text-sm">
                        {data.projects && data.projects.map((project) => (
                         <ProjectNavBarMobile key={project.id} project={project}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}