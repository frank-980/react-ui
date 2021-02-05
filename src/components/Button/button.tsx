import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon'
interface Ibutton{
    type?:string;
    size?:string;
    disabled?:boolean;
    shape?:string;
    ghost?:boolean;
    block?:boolean;
    children?:React.ReactNode;
    onClick?: any;
    style?:any;
    danger?:boolean;
    loading?:boolean;
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
        style,
        danger=false,
        loading=false,
        /** if we extract items here, we dont need use omit.js */
        // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
        ...rest
      } = props;
    const perfixCls = "sxd-btn"
    const classes = classNames(perfixCls, {
        [`${perfixCls}-${type}`]:type,
        [`${perfixCls}-${size}`]:size,
        [`${perfixCls}-${shape}`]:shape,
        [`${perfixCls}-disabled`]:disabled,
        [`${perfixCls}-block`]:block,
        [`${perfixCls}-ghost`]:ghost,
        [`${perfixCls}-danger`]:danger,
    })
    const handleClick = (e:any)=>{
        if(props.disabled) return 
        const { onClick } = props;
        if(onClick){
            onClick(e)
        }
    }
    return (
        <div className={classes} onClick={(e)=>handleClick(e)} style={style}>
            {
            loading
                ? <Icon icon="icon-loading" style={{marginRight:"8px"}} spin/>
                : ""
            }
            {props.children}
        </div>
    )
}
export default Button