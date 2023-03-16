import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";

const sampleSkills =[
    {
        title: "React",
        description: "Creating SPA",
    },
    {
        title: "React Native",
        description: "Creating mobile app",
    },
    {
        title: "TypeScript",
        description: "Creating SPA",
    },
]


export const Skills = () => {
    return(
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title="React" description={sampleSkills[0].description}/>
                    <Skill title="React Native" description={sampleSkills[1].description}/>
                    <Skill title="TypeScript" description={sampleSkills[2].description}/>
                </div>

            </div>

        </div>
    )
}
