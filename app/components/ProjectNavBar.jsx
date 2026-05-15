export default function ProjectNavBar(props) {
    const tabs = document.getElementsByClassName("project-tab");
    const projects = document.getElementsByClassName("project-content");
    const mobileTabs = document.getElementsByClassName("project-navbar-mobile");

    function activeTab(tabID) {
        const currentTab = document.getElementById(`navBarProject${tabID}`);
        const currentProject = document.getElementById(`project${tabID}`);
        const currentMobileTab = document.getElementById(`mobileproject${tabID}`);

        if (!currentTab.classList.contains("visible")) {
            for (let i = 0; i < projects.length; i++) {
                projects[i].classList.remove("visible");
            }
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove("visible");
            }
            for (let i = 0; i < mobileTabs.length; i++) {
                mobileTabs[i].classList.remove("visible");
            }
            currentTab.classList.add("visible");
            currentProject.classList.add("visible");
            currentMobileTab.classList.add("visible");
        }
    }

    return (
        <nav id={`navBarProject${props.project.id}`}
             onLoad={() => {
                 const firstTab = tabs[0];
                 const firstProject = projects[0];
                 const firstMobileTab = mobileTabs[0];
                 if (firstTab && firstProject) {
                     firstTab.classList.add("visible");
                     firstProject.classList.add("visible");
                     firstMobileTab.classList.add("visible");
                 }
             }
             }
             className="project-tab items-center flex bg-zinc-500 visible:bg-secondary sm:p-1 p-0.5 rounded-t-lg"
             onClick={(event) => {
                 event.preventDefault()
                 activeTab(props.project.id);
             }}
        >
            <div
                className="flex gap-3 visible:hover:bg-transparent hover:bg-zinc-400 cursor-pointer rounded-2xl p-[clamp(0.4rem,1vw,0.75rem)] ">
                <img src={props.project.icon} alt={props.project.name} className="size-[clamp(0.8rem,1.5vw,1.25rem)] shrink-0"/>
                <p className="text-[clamp(0.6rem,1.5vw,1rem)] whitespace-nowrap">{props.project.name}</p>
                <img src="./close-outline.svg" className="size-[clamp(0.8rem,1.5vw,1.25rem)] shrink-0" alt="Close Modal"/>
            </div>
        </nav>
    );
}