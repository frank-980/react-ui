import * as React from 'react';
import classNames from 'classnames';
import {ThemeContext} from '../../App'
interface Iicon{
    icon:string;
    rotate?:number;
    spin?:boolean;
    style?:object;
    onClick?:any;
}
const Icon:React.FC<Iicon> = (props)=>{
    const { rotate, spin=false, style={}, icon } = props
    const theme = React.useContext(ThemeContext)
    const perfixCls = theme("icon")
    const classes = classNames(perfixCls,'iconfont',{
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