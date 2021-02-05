import * as React from 'react';
import classNames from 'classnames';
interface Iicon{
    icon:string;
    rotate?:number;
    spin?:boolean;
    style?:object;
    className?:any;
    onClick?:any;
}
const Icon:React.FC<Iicon> = (props:Iicon)=>{
    const { rotate, spin=false, style={}, icon ,className} = props
    const perfixCls = "sxd-icon"
    const classes = classNames(className,perfixCls,'iconfont',{
        [`${icon}`]:icon,
        [`${perfixCls}-spin`]:spin,
    })
    const rotateStyle = rotate 
        ?{ transform: `rotate(${rotate}deg)` }
        :{}
    const styles = Object.assign( {}, style, rotateStyle )
    const handleClick = ()=>{
        if(props.onClick){
            props.onClick()
        }
    }
    return (
        <i className={classes} onClick={()=>handleClick()} style={styles}></i>
    )
}
export default Icon