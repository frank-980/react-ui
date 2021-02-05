import React from 'react';
import { IPreview } from "../interface";
const Preview:React.FC<IPreview> = (props:IPreview)=>{
    const { demo } = props
    return (
        <section className="demo">
            {demo}
        </section>
    )
}
export default Preview