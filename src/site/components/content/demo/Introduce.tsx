import React from 'react';
import Icon from "../../../../components/Icon"
import { IIntroduce } from "../interface";
const Introduce:React.FC<IIntroduce> = (props:IIntroduce)=>{
    const { title, description, switch_code_display } = props
    return (
        <section className="markdown">
            <div className="title">
                <span>{title}</span>
            </div>
            <div className="description">
                <p>{description}</p>
            </div>
            <div className="actions">
                <Icon icon="icon-file" style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer"}}/>
                <Icon icon="icon-code" onClick={()=>switch_code_display()} style={{fontSize:"16px",lineHeight:"16px",cursor:"pointer",marginLeft:"16px"}}/>
            </div>
        </section>
    )
}
export default Introduce