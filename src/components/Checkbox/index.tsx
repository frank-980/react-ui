import React,{useEffect, useState, useRef} from 'react';
import classNames from 'classnames';
interface ICheckbox{
    checked?:boolean;
    defaultChecked?:boolean;
    disabled?:boolean;
    indeterminate?:boolean;
    onChange?:any;
    children?:any;
    Group?:any;
}
interface Option{
    value?:string;
    label?:string;
    disabled?:boolean;
}
interface ICheckboxGroup{
    options?:any[];
    defaultValue?:string[];
    value?:string[];
    disabled?:boolean;

    onChange?:any;

}
const Checkbox:React.FC<ICheckbox> = (props:ICheckbox)=>{
    const { onChange=()=>{}, children, checked, defaultChecked=false, disabled=false,indeterminate=false } = props
    const [isChecked,setChecked] = useState(defaultChecked)
    const [isDisabled,setDisabled] = useState(disabled)
    useEffect(()=>{
        if(isDisabled) return ;
        
        if(checked!==undefined){
            setChecked(checked)
        }
    },[checked])
    useEffect(()=>{
        if(disabled!==undefined){
            setDisabled(disabled)
        }
    },[disabled])
    const handleClick = ()=>{
        if(isDisabled) return ;
        setChecked(!isChecked)
        onChange(!isChecked)
    }
    const classes = classNames("sxd-checkbox",{
        "sxd-checkbox-checked":isChecked,
        "sxd-checkbox-disabled":isDisabled,
        "sxd-checkbox-indeterminate":indeterminate,
    })
    const wrapClasses = classNames("sxd-checkbox-wrapper",{"sxd-checkbox-wrapper-disabled":isDisabled})
    return (
        <span style={{display:"inline-block"}}>
            <span className={wrapClasses} onClick={()=>handleClick()}>
                <span className={classes}>
                    <span className="sxd-checkbox-inner"/>
                </span>
                <span className="sxd-checkbox-text">{children}</span>
            </span>
        </span>
    )
}
const CheckboxGroup:React.FC<ICheckboxGroup> = (props:any)=>{
    const {options,defaultValue,disabled,onChange=()=>{},value} = props
    //console.log("value:",value)
    const exportvalue=  value || defaultValue || []
    const getChecked = (option:any)=>{
        if (typeof option === 'string') {
            if(exportvalue.indexOf(option)>-1){
                return true
            }
        }else{
            if(exportvalue.indexOf(option.value)>-1){
                return true
            }
        }
        return false
    }
    const initData = ()=>{
        if(options && options.length > 0){
            return options.map((option:any) => {
                if (typeof option === 'string') {
                  return {
                    label: option,
                    value: option,
                    checked:getChecked(option),
                    disabled:false
                  };
                }
                return {...option,checked:getChecked(option),disabled:option.disabled||false};
            });
        }
        return []
    }
    const [data,setData] = useState(initData())
    const [click,setClick] = useState(false)
    //setData(initData())
    let flag = useRef(true)
    useEffect(()=>{
        if(flag.current){
            flag.current=false
            return
        }
        setData(initData())
    },[exportvalue])
    useEffect(()=>{
        let v:any = []
        data.map((item:any)=>{
            if(item.checked){
                v.push(item.value)
            }
        })
        onChange(v)
    },[click])
    return data.map((item:any)=>{
        const handleClick = (value:any)=>{
            if(item.disabled) return ;
            setData(data.map((item:any)=>{
                if(value === item.value){
                    return {...item,checked:!item.checked}
                }
                return item
            }))
            setClick(!click)
        }
        const classes = classNames("sxd-checkbox",{
            "sxd-checkbox-checked":item.checked,
            "sxd-checkbox-disabled":item.disabled,
           
        })
        const wrapClasses = classNames("sxd-checkbox-wrapper",{"sxd-checkbox-wrapper-disabled":item.disabled})
        return (
            <span key={item.value} style={{display:"inline-block"}}>
                <span className={wrapClasses} onClick={()=>handleClick(item.value)}>
                    <span className={classes}>
                        <span className="sxd-checkbox-inner"/>
                    </span>
                    <span className="sxd-checkbox-text">{item.label}</span>
                </span>
            </span>
        )
    })
    
}

export { Checkbox, CheckboxGroup }