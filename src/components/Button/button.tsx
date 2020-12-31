import * as React from 'react';
import classNames from 'classnames';
import {ThemeContext} from '../../App'
interface Ibutton{
    type?:string;
    size?:string;
    disabled?:boolean;
    shape?:string;
    ghost?:boolean;
    block?:boolean;
    children?:React.ReactNode;
    onClick?: any;
}

const Button:React.FC<Ibutton> = (props)=>{
    const {
        type='default',
        size='normal',
        disabled=false,
        ghost = false,
        block=false,
        shape,
        children,
        /** if we extract items here, we dont need use omit.js */
        // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
        ...rest
      } = props;
    const theme = React.useContext(ThemeContext)
    const perfixCls = theme("btn")
    const classes = classNames(perfixCls, {
        [`${perfixCls}-${type}`]:type,
        [`${perfixCls}-${size}`]:size,
        [`${perfixCls}-${shape}`]:shape,
        [`${perfixCls}-disabled`]:disabled,
        [`${perfixCls}-block`]:block,
        [`${perfixCls}-ghost`]:ghost,
    })
    const handleClick = (e:any)=>{
        if(props.disabled) return 
        const { onClick } = props;
        if(onClick){
            onClick(e)
        }
    }
    return (
        <div className={classes} onClick={(e)=>handleClick(e)}>
            
            {props.children}
        </div>
    )
}
export default Button