import React, {FC} from "react";
import style from "./Skill.module.css"

type SkillPropsType ={
    title:string
    description:string
}

export const Skill:FC<SkillPropsType> =(props)=>{
    return(
        <div className={style.skill}>
            <div className={style.icon}>

            </div>
                <h3>{props.title}</h3>
               <p className={style.description}>{props.description}</p>
        </div>
    )
}
