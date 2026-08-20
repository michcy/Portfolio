import Link from "next/link";

export default function Project(props) {
    return (
        <div id={`project${props.project.id}`}
             className="project-content visible:flex hidden p-5 sm:p-10 sm:pb-10 pb-0  flex-col gap-5">
            <div
                className="bg-white flex w-full sm:text-base text-xs  p-4 text-zinc-700 border gap-2 border-zinc-300 rounded-xl">
                <Link href={`${props.project.liveUrl}`}
                      className="flex text-zinc-700 gap-2 items-center hover:text-primary cursor-pointer">
                    <img src="./lock-closed-outline.svg" alt="Locked Project"
                         className="sm:w-5 sm:h-5 h-4 w-4 pb-1"
                    />
                    {props.project.liveUrl}
                </Link>
            </div>
            <h1 className="font-druk text-5xl pt-3 pb-3 uppercase text-primary">{props.project.name}</h1>
            <Link href={`${props.project.liveUrl}`} className="cursor-pointer">
                <img src={props.project.thumbnail} alt={props.project.name}
                     className="w-full aspect-video rounded-xl hover:scale-101 transition duration-500 object-cover object-top"/>
            </Link>
            <div className="flex items-center flex-wrap gap-4">
                {props.project.tags && props.project.tags.map((tag) => (
                    <p key={`${props.project.name}_${tag}`}
                       className="bg-black text-white p-2 text-xs rounded-2xl"
                    >{tag}</p>
                ))}
            </div>
            <p className="project-description text-zinc-700">{props.project.description}</p>

            <Link href={`${props.project.githubUrl}`}
                  className="bg-primary p-4 sm:w-fit shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] ease-out hover:translate-y-1 transition-all w-full flex gap-4 text-secondary rounded-xl"
            >
                <img src="./logo-github.svg" alt="Github Project" className="invert w-5 h-5"/>
                GitHub Repository
            </Link>
        </div>
    )
}