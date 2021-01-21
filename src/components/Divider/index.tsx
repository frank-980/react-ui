import React,{useEffect, useState} from 'react';
import classNames from 'classnames';
interface IDivider{
    orientation?:"left" | "right" | "middle";
    dashed?:boolean;
    children?:any;
}
const Divider:React.FC<IDivider> = (props:IDivider)=>{
    const { orientation, dashed, children } = props
    const classes = classNames("sxd-divider",{
        "sxd-divider-dashed":dashed,
        "sxd-divider-with-text":orientation,
        [`sxd-divider-with-text-${orientation}`]:orientation
    })
    const dividerContent=()=>{
        if(children){
            return (
                <span className="sxd-divider-inner-text">{children}</span>
            )
        }
    }
    return (
        <div className={classes}>
            {dividerContent()}
        </div>
    )
}
export default Divider