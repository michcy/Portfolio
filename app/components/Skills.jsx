import {useEffect, useState} from "react";
import RightSkill from "@/app/components/RightSkill";
import Language from "@/app/components/Language";
import LeftSkill from "@/app/components/LeftSkill";

export default function Skills() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            let response = await fetch(`./skills.json`);
            let data = await response.json();
            setData(data);

        } catch (error) {
            console.log(error);
        }
    }

    const rightSkills = data.skills ? data.skills.filter((_, index) => index < 4) : [];
    const leftSkills = data.skills ? data.skills.filter((_, index) => index >= 4) : [];

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div id="skills"
             className="skills-section bg-secondary text-primary flex sm:pt-10 sm:pb-10 pb-5 pt-5 justify-center flex-col">
            <h2 className="text-7xl uppercase font-druk sm:pt-12 pb-12 sm:p-10 p-5 pt-20">Kompetenzen</h2>
            <div className="skills flex overflow-hidden gap-7 flex-col">
                <div className="skills flex justify-start overflow-hidden items-center ">
                    <div className="flex flex-nowrap gap-4 pr-4 animate-rightslide">
                        {rightSkills && rightSkills.map((skill) => (
                            <RightSkill key={`${skill.id}-${skill.name}`} skill={skill}/>
                        ))}
                    </div>
                    <div aria-hidden className="flex flex-nowrap gap-4 pr-4 animate-rightslide">
                        {rightSkills && rightSkills.map((skill) => (
                            <RightSkill key={`${skill.id}-${skill.name}`} skill={skill}/>
                        ))}
                    </div>
                </div>
                <div className="skills flex justify-start overflow-hidden items-center ">
                    <div className="flex flex-nowrap gap-4 pr-4 animate-leftslide">
                        {leftSkills && leftSkills.map((skill) => (
                            <LeftSkill key={`${skill.id}-${skill.name}`} skill={skill}/>
                        ))}
                    </div>
                    <div aria-hidden className="flex flex-nowrap pr-4 gap-4 animate-leftslide">
                        {leftSkills && leftSkills.map((skill) => (
                            <LeftSkill key={`${skill.id}-${skill.name}`} skill={skill}/>
                        ))}
                    </div>
                </div>
            </div>

            <h2 className="font-druk sm:text-7xl sm:p-10 p-5 text-5xl uppercase pt-12 pb-12">Sprachkenntnisse</h2>
            <div className="flex sm:p-10 p-5 flex-col gap-4">
                {data.languages && data.languages.map((language) => (
                    <Language key={`${language.id}-${language.name}`} language={language}/>
                ))}
            </div>
        </div>
    );
}